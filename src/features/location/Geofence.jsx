import React, { useState } from 'react';
import { ToggleLeft, Trash2, Edit2, LogIn, LogOut } from 'lucide-react';

export default function Geofence() {
  const [fences, setFences] = useState([
    { id: 1, name: 'School', enabled: true },
    { id: 2, name: 'Home', enabled: true }
  ]);

  const crossings = [
    { id: 1, text: 'Daniel entered School', time: '2022-05-23 07:55:07', type: 'enter' },
    { id: 2, text: 'Daniel exited School', time: '2022-05-23 14:40:36', type: 'exit' },
    { id: 3, text: 'Daniel entered School', time: '2022-05-24 07:48:52', type: 'enter' },
    { id: 4, text: 'Daniel exited School', time: '2022-05-24 14:35:30', type: 'exit' },
    { id: 5, text: 'Daniel entered School', time: '2022-05-25 07:45:00', type: 'enter' },
    { id: 6, text: 'Daniel exited School', time: '2022-05-25 14:46:32', type: 'exit' },
    { id: 7, text: 'Daniel entered School', time: '2022-05-26 07:42:51', type: 'enter' },
    { id: 8, text: 'Daniel exited School', time: '2022-05-26 14:39:10', type: 'exit' }
  ];

  const handleToggle = (id) => {
    setFences(fences.map(f => f.id === id ? { ...f, enabled: !f.enabled } : f));
  };

  return (
    <div className="bg-white rounded-2xl shadow-xs border border-slate-200/80 min-h-[720px] flex overflow-hidden">
      {/* Left Zones Switcher */}
      <div className="w-1/3 border-r border-slate-200 flex flex-col justify-between bg-slate-50/20">
        <div className="flex-1 divide-y divide-slate-100 overflow-y-auto">
          {fences.map((fence) => (
            <div key={fence.id} className="p-4 flex items-center justify-between hover:bg-slate-50/50 transition-colors">
              <div className="flex items-center space-x-3 min-w-0">
                <span className="text-lg">📍</span>
                <span className="text-xs font-bold text-slate-800 truncate">{fence.name}</span>
              </div>

              <div className="flex items-center space-x-2.5">
                {/* Switch toggle */}
                <button
                  onClick={() => handleToggle(fence.id)}
                  className={`w-9 h-5 rounded-full p-0.5 transition-colors ${
                    fence.enabled ? 'bg-cyan-500' : 'bg-slate-300'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-white transition-transform ${
                      fence.enabled ? 'translate-x-4' : 'translate-x-0'
                    }`}
                  />
                </button>

                <button className="text-slate-400 hover:text-cyan-600 transition-colors">
                  <Edit2 className="w-3.5 h-3.5" />
                </button>

                <button className="text-slate-400 hover:text-red-500 transition-colors">
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Add fence button */}
        <div className="p-4 border-t border-slate-200 bg-white">
          <button className="w-full py-2.5 bg-white border border-dashed border-cyan-300 text-cyan-600 hover:bg-cyan-50/30 rounded-xl text-xs font-bold flex items-center justify-center space-x-2 transition-all">
            <span className="text-sm">+</span>
            <span>Add a geofence</span>
          </button>
        </div>
      </div>

      {/* Right Crossings Logs timeline */}
      <div className="flex-1 bg-slate-50/30 divide-y divide-slate-100 overflow-y-auto">
        {crossings.map((log) => (
          <div key={log.id} className="p-4 flex items-center justify-between hover:bg-slate-50/40 transition-colors text-xs">
            <div className="flex items-center space-x-3">
              {log.type === 'enter' ? (
                <div className="p-2 bg-green-50 rounded-lg text-green-600 shrink-0">
                  <LogIn className="w-4 h-4" />
                </div>
              ) : (
                <div className="p-2 bg-red-50 rounded-lg text-red-500 shrink-0">
                  <LogOut className="w-4 h-4" />
                </div>
              )}
              <span className="font-semibold text-slate-800">{log.text}</span>
            </div>

            <span className="text-[10px] text-slate-400 font-mono">{log.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
