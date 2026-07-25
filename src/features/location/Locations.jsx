import React, { useState } from 'react';
import { Search, ChevronDown, MapPin } from 'lucide-react';

export default function Locations() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('All');

  const locs = [
    {
      id: 1,
      address: 'Times Square, 1560 Broadway Suite 1001, New York, NY 10036',
      coords: '40.7580, -73.9855',
      time: '26-07-2026 14:20:37'
    },
    {
      id: 2,
      address: '350 5th Ave, New York, NY 10118',
      coords: '40.7484, -73.9857',
      time: '26-07-2026 12:00:40'
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xs border border-slate-200/80 p-6 min-h-[720px] flex flex-col space-y-6">
      {/* Top filter control header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors">
            <span>{filter}</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </button>
          
          <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-md">
            GPS: On
          </span>
        </div>

        <div className="relative max-w-xs w-full">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-xs focus:outline-hidden focus:border-cyan-500 bg-slate-50/50"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
        </div>
      </div>

      {/* Map mockup */}
      <div className="relative w-full h-[380px] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-73.9855,40.7580,14,0/800x380?access_token=mock')` }}>
          {/* Fallback pattern representing coordinates map */}
          <div className="w-full h-full flex flex-col items-center justify-center bg-sky-100/60 p-4 text-center">
            <div className="p-3 bg-white rounded-xl shadow-lg max-w-xs border border-slate-150 relative space-y-1">
              <p className="text-[10px] font-bold text-slate-800">Address: Times Square, 1560 Broadway Suite 1001, New York, NY 10036</p>
              <p className="text-[9px] text-slate-400">Date: 26-07-2026 14:20:37</p>
              <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white" />
            </div>
            <div className="w-4 h-4 bg-cyan-500 border-2 border-white rounded-full mt-4 shadow-lg animate-bounce" />
          </div>
        </div>
      </div>

      {/* Locations Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-slate-50/50">
              <th className="py-3 px-4">Address</th>
              <th className="py-3 px-4">Longitude and Latitude</th>
              <th className="py-3 px-4">Location Time</th>
              <th className="py-3 px-4 text-center">Map View</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
            {locs.map((loc) => (
              <tr key={loc.id} className="hover:bg-slate-50/60 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-800 max-w-[320px] truncate">{loc.address}</td>
                <td className="py-3.5 px-4 font-mono text-cyan-600 font-semibold">
                  <div className="flex items-center space-x-1 hover:underline cursor-pointer">
                    <MapPin className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                    <span>{loc.coords}</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 font-mono text-slate-500">{loc.time}</td>
                <td className="py-3.5 px-4 text-center">
                  <button className="text-cyan-500 hover:text-cyan-705 font-bold">
                    📍
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
