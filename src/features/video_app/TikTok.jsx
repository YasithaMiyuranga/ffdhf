import React, { useState } from 'react';
import { Search, Calendar, ChevronLeft, ChevronRight, User } from 'lucide-react';

const TikTokBadgeIcon = () => (
  <svg className="w-4 h-4 text-pink-500 shrink-0" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 1 0 5.55 6.29V9.41a8.27 8.27 0 0 0 4.77 1.52V7.47a4.85 4.85 0 0 1-1.0-.78z"/>
  </svg>
);

export default function TikTok() {
  const [activeTab, setActiveTab] = useState('watch');
  const [selectedDate, setSelectedDate] = useState('2026-07-21');

  const watchHistory = [
    { id: 1, time: '10:00 AM', title: 'what kind of fabric does @Free People', channel: '@nataliemazack' },
    { id: 2, time: '10:08 AM', title: 'the iron golem MLG...', channel: 'camman18' },
    { id: 3, time: '10:19 AM', title: 'BLAST Spring Final 2022, Semifinals OG vs NAVI, G2 vs Vitality', channel: 'BLAST Premier' },
    { id: 4, time: '10:25 AM', title: 'How Good Is A 56 Rated PRO FOOTBALLER in REAL LIFE? (Crazy Skills & Goals)', channel: 'LDN Movements' },
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
            <TikTokBadgeIcon />
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
            <p className="text-2xl font-extrabold text-cyan-600 mt-0.5">4</p>
          </div>
          <div className="border-l border-slate-200 pl-12">
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Screen Time</p>
            <p className="text-2xl font-extrabold text-cyan-600 mt-0.5">5m 45s</p>
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

        {/* List of Watched TikTok Videos matching screenshot */}
        <div className="divide-y divide-slate-100 border-t border-slate-100">
          {watchHistory.map((item) => (
            <div key={item.id} className="py-3.5 flex items-start space-x-4 hover:bg-slate-50/50 px-2 rounded-lg transition-colors">
              <span className="text-xs font-mono text-slate-400 w-16 shrink-0 pt-0.5">{item.time}</span>
              <TikTokBadgeIcon />
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
