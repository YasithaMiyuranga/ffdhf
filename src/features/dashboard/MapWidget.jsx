import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { MapPin, Navigation, Clock } from 'lucide-react';
import L from 'leaflet';

// Fix default marker icon issue in Leaflet with bundlers
const customMarkerIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function MapWidget() {
  const location = {
    lat: 6.9271, // Colombo latitude sample
    lng: 79.8612, // Colombo longitude sample
    address: 'Liberty Plaza, R. A. De Mel Mawatha, Colombo 00300',
    time: '2026-07-21 15:35:10',
    accuracy: 'Accurate to 8 meters (GPS)',
  };

  return (
    <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200/80 flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <MapPin className="w-5 h-5 text-cyan-600" />
          <h2 className="text-base font-bold text-slate-800">Last Known Location</h2>
        </div>
        <button className="px-3 py-1 bg-cyan-50 hover:bg-cyan-100 text-cyan-700 text-xs font-semibold rounded-lg border border-cyan-200 transition-colors">
          Sync Location
        </button>
      </div>

      {/* Map Display */}
      <div className="w-full h-72 rounded-xl overflow-hidden border border-slate-200 relative z-0">
        <MapContainer
          center={[location.lat, location.lng]}
          zoom={14}
          scrollWheelZoom={false}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[location.lat, location.lng]} icon={customMarkerIcon}>
            <Popup>
              <div className="p-1 text-xs">
                <p className="font-bold text-slate-800">John's Galaxy S24</p>
                <p className="text-slate-600 mt-1">{location.address}</p>
                <p className="text-slate-400 mt-0.5">{location.time}</p>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      {/* Location Details Summary */}
      <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-200/70 text-xs space-y-1.5">
        <div className="flex items-start space-x-2">
          <Navigation className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-slate-700">Current Address: </span>
            <span className="text-slate-600">{location.address}</span>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-slate-500 pl-6">
          <Clock className="w-3.5 h-3.5" />
          <span>Timestamp: {location.time} • {location.accuracy}</span>
        </div>
      </div>
    </div>
  );
}
