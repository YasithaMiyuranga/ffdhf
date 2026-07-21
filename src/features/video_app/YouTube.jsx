import React, { useState } from 'react';
import { Search, Calendar, ChevronLeft, ChevronRight, User } from 'lucide-react';

const YouTubeSvgIcon = () => (
  <svg className="w-4 h-4 text-cyan-600" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const YouTubeRedBadge = () => (
  <svg className="w-4 h-4 text-red-600 shrink-0" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export default function YouTube() {
  const [activeTab, setActiveTab] = useState('watch');
  const [selectedDate, setSelectedDate] = useState('2026-07-21');

  const watchHistory = [
    { id: 1, time: '06:00 PM', title: 'SIDEMEN AMONG US: THE BEST SHAPESHIFTER YET', channel: 'MoreSidemen' },
    { id: 2, time: '06:12 PM', title: '10 Times Ronaldinho Impressed The World', channel: 'mr bundesteam' },
    { id: 3, time: '06:27 PM', title: '1 in a Billion Moments', channel: 'AshStudio7' },
    { id: 4, time: '06:44 PM', title: 'Red Bull Neymar Jr\'s Five World Final 2022', channel: 'Neymar Jr' },
    { id: 5, time: '06:50 PM', title: 'Golden State Warriors vs Boston Celtics Game 6 Full Highlights | 2022 NBA Finals', channel: 'FreeDawkins' },
    { id: 6, time: '07:04 PM', title: '17 Types of Students in Every Science Lab', channel: 'JianHao Tan' },
    { id: 7, time: '07:13 PM', title: 'Shape of You', channel: 'Ed Sheeran' },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xs border border-slate-200/80 p-6 min-h-[720px] flex flex-col space-y-6">
      {/* Top Tab Switcher */}
      <div className="flex items-center justify-center border-b border-slate-200">
        <div className="flex space-x-8 text-xs font-bold">
          <button
            onClick={() => setActiveTab('watch')}
            className={`pb-3 flex items-center space-x-2 transition-all ${
              activeTab === 'watch'
                ? 'border-b-2 border-cyan-500 text-cyan-600'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <YouTubeSvgIcon />
            <span>Watch History</span>
          </button>
          <button
            onClick={() => setActiveTab('search')}
            className={`pb-3 flex items-center space-x-2 transition-all ${
              activeTab === 'search'
                ? 'border-b-2 border-cyan-500 text-cyan-600'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Search className="w-4 h-4" />
            <span>Search History</span>
          </button>
        </div>
      </div>

      {/* Summary Box & Date Picker */}
      <div className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-5 flex items-center justify-between">
        <div className="flex items-center space-x-12">
          <div>
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Videos viewed</p>
            <p className="text-2xl font-extrabold text-cyan-600 mt-0.5">7</p>
          </div>
          <div className="border-l border-slate-200 pl-12">
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Screen Time</p>
            <p className="text-2xl font-extrabold text-cyan-600 mt-0.5">1h 21m 15s</p>
          </div>
        </div>

        <div className="flex items-center space-x-2 border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-600 bg-white shadow-2xs">
          <button className="hover:text-slate-900 text-slate-400">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex items-center space-x-2 font-medium">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <span>{selectedDate}</span>
          </div>
          <button className="hover:text-slate-900 text-slate-400">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Timeline View Header */}
      <div>
        <h3 className="text-xs font-bold text-slate-800 border-l-4 border-cyan-500 pl-3 mb-4">
          Timeline View
        </h3>

        {/* List of Watched YouTube Videos matching screenshot */}
        <div className="divide-y divide-slate-100 border-t border-slate-100">
          {watchHistory.map((item) => (
            <div key={item.id} className="py-3.5 flex items-start space-x-4 hover:bg-slate-50/50 px-2 rounded-lg transition-colors">
              <span className="text-xs font-mono text-slate-400 w-16 shrink-0 pt-0.5">{item.time}</span>
              <YouTubeRedBadge />
              <div className="flex-1 min-w-0 space-y-1">
                <h4 className="text-xs font-semibold text-slate-800 hover:text-cyan-600 cursor-pointer truncate">
                  {item.title}
                </h4>
                <div className="flex items-center space-x-1.5 text-[11px] text-slate-400">
                  <User className="w-3 h-3 text-slate-400" />
                  <span>{item.channel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
