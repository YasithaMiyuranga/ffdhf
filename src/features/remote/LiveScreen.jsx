import React, { useState } from 'react';
import { Tv, Play } from 'lucide-react';

export default function LiveScreen() {
  const [isLive, setIsLive] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-xs border border-slate-200/80 p-6 min-h-[720px] flex flex-col items-center justify-center space-y-6">
      {/* Phone device mock screen container */}
      <div className="w-[300px] h-[520px] rounded-3xl border-8 border-slate-800 bg-slate-900 shadow-xl overflow-hidden relative flex flex-col items-center justify-center p-6 text-center">
        {isLive ? (
          <div className="absolute inset-0 bg-cyan-950 flex flex-col items-center justify-center text-white space-y-4">
            <span className="w-3 h-3 bg-red-500 rounded-full animate-ping" />
            <p className="text-sm font-bold tracking-wider">LIVE STREAMING...</p>
            <p className="text-[10px] text-cyan-200">John's Galaxy S24 Screen</p>
            
            <button
              onClick={() => setIsLive(false)}
              className="mt-6 px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-bold text-xs rounded-lg transition-all"
            >
              Stop Mirroring
            </button>
          </div>
        ) : (
          <div className="space-y-4 text-slate-400">
            <div className="p-4 bg-slate-800/80 rounded-full inline-flex items-center justify-center">
              <Tv className="w-10 h-10 text-cyan-400" />
            </div>
            <p className="text-xs font-bold text-slate-300 px-4 leading-relaxed">
              Please click Start Live to begin screen mirroring.
            </p>
          </div>
        )}
      </div>

      {/* Start Live trigger button */}
      {!isLive && (
        <button
          onClick={() => setIsLive(true)}
          className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold text-xs rounded-full flex items-center space-x-2 shadow-md transition-all uppercase tracking-wider"
        >
          <Play className="w-4 h-4 fill-current" />
          <span>Start Live</span>
        </button>
      )}

      {/* Warning info disclaimer */}
      <p className="text-[10px] text-slate-400 max-w-sm text-center leading-relaxed">
        Using it for too long will cause the target device to heat up, so please control the time appropriately.
      </p>
    </div>
  );
}
