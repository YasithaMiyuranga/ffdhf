import React from 'react';
import { RefreshCw, Bell, User, Globe } from 'lucide-react';

export default function Header({ title, lastUpdated, onSync }) {
  return (
    <header className="bg-white border-b border-slate-200 px-6 py-3.5 flex items-center justify-between shadow-xs sticky top-0 z-10">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-bold text-slate-800 tracking-tight capitalize">{title || 'Dashboard'}</h1>
        <button
          onClick={onSync}
          className="flex items-center space-x-1.5 px-3 py-1 bg-cyan-50 hover:bg-cyan-100 text-cyan-600 rounded-full text-xs font-semibold transition-colors border border-cyan-200"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Sync</span>
        </button>
        <span className="text-xs text-slate-400 font-medium">
          Updated: {lastUpdated || '2026-07-21 15:30:00'}
        </span>
      </div>

      <div className="flex items-center space-x-4">
        <button className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors relative">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="flex items-center space-x-2 border-l border-slate-200 pl-4">
          <Globe className="w-4 h-4 text-slate-400" />
          <span className="text-xs font-semibold text-slate-600">English</span>
        </div>

        <div className="flex items-center space-x-2.5 pl-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold text-xs shadow-sm">
            P
          </div>
          <div className="text-left hidden sm:block">
            <p className="text-xs font-bold text-slate-700 leading-none">Parent Account</p>
            <p className="text-[10px] text-slate-400 mt-0.5">parent@example.com</p>
          </div>
        </div>
      </div>
    </header>
  );
}
