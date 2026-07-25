import React, { useState } from 'react';
import { Navigation, Calendar, Clock, MapPin, Gauge } from 'lucide-react';

export default function DrivingTracking() {
  const [activeRouteId, setActiveRouteId] = useState(1);

  const routes = [
    {
      id: 1,
      distance: '15.30 KM',
      time: '2024-10-05 06:00:00',
      duration: '22m00s',
      status: 'Driving',
      avgSpeed: '42KM/H',
      maxSpeed: '60KM/H',
      startAddress: '1600 Pennsylvania Avenue NW, Washington, DC 20500, USA',
      startTime: '2024-10-05 06:00:00',
      endAddress: '601 F St NW, Washington, DC 20004, USA',
      endTime: '2024-10-05 06:22:00'
    },
    {
      id: 2,
      distance: '7.80 KM',
      time: '2024-09-27 09:45:00 / 09:57:00',
      duration: '12m00s',
      status: 'Parked',
      avgSpeed: '39KM/H',
      maxSpeed: '52KM/H',
      startAddress: '100 Main St, Seattle, WA',
      startTime: '2024-09-27 09:45:00',
      endAddress: '200 Pine St, Seattle, WA',
      endTime: '2024-09-27 09:57:00'
    },
    {
      id: 3,
      distance: '28.50 KM',
      time: '2024-09-13 13:15:00 / 13:53:00',
      duration: '38m00s',
      status: 'Driving',
      avgSpeed: '45KM/H',
      maxSpeed: '72KM/H',
      startAddress: 'Subway Rd, Houston, TX',
      startTime: '2024-09-13 13:15:00',
      endAddress: 'Loop Rd, Houston, TX',
      endTime: '2024-09-13 13:53:00'
    }
  ];

  const activeRoute = routes.find(r => r.id === activeRouteId) || routes[0];

  return (
    <div className="bg-white rounded-2xl shadow-xs border border-slate-200/80 min-h-[720px] flex overflow-hidden">
      {/* Left Routes Switcher list */}
      <div className="w-1/3 border-r border-slate-200 flex flex-col">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <span className="text-xs font-bold text-slate-800">Route History</span>
        </div>
        <div className="flex-1 overflow-y-auto divide-y divide-slate-50">
          {routes.map((r) => (
            <button
              key={r.id}
              onClick={() => setActiveRouteId(r.id)}
              className={`w-full p-4 text-left flex items-start space-x-3 transition-colors ${
                activeRouteId === r.id ? 'bg-cyan-50/50 border-l-4 border-cyan-500' : 'hover:bg-slate-50/50'
              }`}
            >
              <div className="p-2 bg-slate-100 rounded-lg shrink-0 flex items-center justify-center">
                <Navigation className="w-4 h-4 text-slate-500" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-0.5">
                  <span className="text-xs font-extrabold text-slate-800">{r.distance}</span>
                </div>
                <p className="text-[10px] text-slate-500 truncate font-mono">{r.time}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Right Details content pane */}
      <div className="flex-1 p-8 bg-slate-50/30 overflow-y-auto flex flex-col space-y-8">
        {/* Driving Status cards row */}
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-4 border border-slate-200/60 shadow-3xs flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center text-green-600 shrink-0">
              🚗
            </div>
            <div>
              <span className="text-[10px] text-slate-400 font-semibold block">Driving</span>
              <span className="text-xs font-extrabold text-slate-800">{activeRoute.status}</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 border border-slate-200/60 shadow-3xs flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-600 shrink-0">
              <Navigation className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] text-slate-400 font-semibold block">Distance</span>
              <span className="text-xs font-extrabold text-slate-800">{activeRoute.distance}</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 border border-slate-200/60 shadow-3xs flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600 shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] text-slate-400 font-semibold block">Duration</span>
              <span className="text-xs font-extrabold text-slate-800">{activeRoute.duration}</span>
            </div>
          </div>
        </div>

        {/* Timeline details and Gauges speed widgets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Timeline details */}
          <div className="bg-white rounded-xl p-6 border border-slate-200/60 shadow-3xs flex flex-col space-y-6">
            <h3 className="text-xs font-extrabold text-slate-800">Timeline</h3>
            <div className="relative pl-6 border-l border-slate-200/80 space-y-6">
              {/* Start address */}
              <div className="relative">
                <div className="absolute -left-8.5 top-0.5 w-5 h-5 bg-green-500 border-2 border-white rounded-full flex items-center justify-center text-white text-[8px] font-bold">
                  S
                </div>
                <p className="text-xs font-semibold text-slate-800 leading-relaxed">{activeRoute.startAddress}</p>
                <span className="text-[10px] text-slate-400 font-mono mt-1 block">{activeRoute.startTime}</span>
              </div>

              {/* End address */}
              <div className="relative">
                <div className="absolute -left-8.5 top-0.5 w-5 h-5 bg-red-500 border-2 border-white rounded-full flex items-center justify-center text-white text-[8px] font-bold">
                  E
                </div>
                <p className="text-xs font-semibold text-slate-800 leading-relaxed">{activeRoute.endAddress}</p>
                <span className="text-[10px] text-slate-400 font-mono mt-1 block">{activeRoute.endTime}</span>
              </div>
            </div>
          </div>

          {/* Gauges speed widgets */}
          <div className="bg-white rounded-xl p-6 border border-slate-200/60 shadow-3xs flex flex-col space-y-6">
            <h3 className="text-xs font-extrabold text-slate-800">Speed Status</h3>
            <div className="flex justify-around items-center h-full">
              {/* Average speed */}
              <div className="text-center space-y-2">
                <div className="w-24 h-12 relative flex items-end justify-center overflow-hidden">
                  <div className="absolute inset-x-0 bottom-0 aspect-square rounded-full border-8 border-slate-100 border-t-cyan-500 border-r-cyan-500 rotate-45" />
                  <span className="text-xs font-extrabold text-slate-800 relative z-10 pb-1">{activeRoute.avgSpeed}</span>
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Average Speed</span>
              </div>

              {/* Max speed */}
              <div className="text-center space-y-2">
                <div className="w-24 h-12 relative flex items-end justify-center overflow-hidden">
                  <div className="absolute inset-x-0 bottom-0 aspect-square rounded-full border-8 border-slate-100 border-t-red-500 border-r-red-500 rotate-[120deg]" />
                  <span className="text-xs font-extrabold text-slate-800 relative z-10 pb-1">{activeRoute.maxSpeed}</span>
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Max Speed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
