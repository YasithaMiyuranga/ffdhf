import React, { useState } from 'react';
import { Search, Calendar, ChevronLeft, ChevronRight, User, Clock } from 'lucide-react';

const OnlyFansBadge = () => (
  <svg className="w-4 h-4 text-cyan-500 shrink-0" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 18c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z"/>
  </svg>
);

export default function OnlyFans() {
  const [activeTab, setActiveTab] = useState('watch');
  const [selectedDate, setSelectedDate] = useState('2026-07-21');
  const [autoScreenshots, setAutoScreenshots] = useState(true);

  const watchHistory = [
    {
      id: 1,
      time: '06:17 PM',
      title: 'Behind-the-scenes Cosplay photoshoot',
      channel: '@CosplayQueenk',
      duration: '03m 31s',
      thumb: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    },
    {
      id: 2,
      time: '06:52 PM',
      title: 'Exclusive fitness tips & meal plans',
      channel: '@FitWithJade',
      duration: '54s',
      thumb: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80',
    },
    {
      id: 3,
      time: '08:11 PM',
      title: 'Day in my life: Content creator vlog',
      channel: '@LifeWithMaya',
      duration: '01m 49s',
      thumb: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&auto=format&fit=crop&q=80',
    },
    {
      id: 4,
      time: '10:24 PM',
      title: 'Fashion styling tips for subscribers',
      channel: '@TheStyleMaven',
      duration: '18s',
      thumb: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
    },
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
            <OnlyFansBadge />
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
            <p className="text-2xl font-extrabold text-cyan-600 mt-0.5">30m 43s</p>
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

      {/* Timeline View Header & Auto Screenshots Switch */}
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-bold text-slate-800 border-l-4 border-cyan-500 pl-3">
          Timeline View
        </h3>

        <div className="flex items-center space-x-2 text-xs font-semibold text-slate-600">
          <span>Auto Screenshots</span>
          <button
            onClick={() => setAutoScreenshots(!autoScreenshots)}
            className={`w-9 h-5 rounded-full p-0.5 transition-colors ${
              autoScreenshots ? 'bg-cyan-500' : 'bg-slate-300'
            }`}
          >
            <div
              className={`w-4 h-4 rounded-full bg-white transition-transform ${
                autoScreenshots ? 'translate-x-4' : 'translate-x-0'
              }`}
            />
          </button>
        </div>
      </div>

      {/* List of Watched OnlyFans Videos matching screenshot */}
      <div className="divide-y divide-slate-100 border-t border-slate-100">
        {watchHistory.map((item) => (
          <div key={item.id} className="py-3 flex items-center justify-between hover:bg-slate-50/50 px-2 rounded-lg transition-colors">
            <div className="flex items-start space-x-4">
              <span className="text-xs font-mono text-slate-400 w-16 shrink-0 pt-0.5">{item.time}</span>
              <OnlyFansBadge />
              <div className="space-y-1">
                <h4 className="text-xs font-semibold text-slate-800 hover:text-cyan-600 cursor-pointer">
                  {item.title}
                </h4>
                <div className="flex items-center space-x-3 text-[11px] text-slate-400">
                  <div className="flex items-center space-x-1">
                    <User className="w-3 h-3 text-slate-400" />
                    <span>{item.channel}</span>
                  </div>
                  <div className="flex items-center space-x-1 font-mono text-slate-500">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>{item.duration}</span>
                  </div>
                </div>
              </div>
            </div>

            <img
              src={item.thumb}
              alt={item.title}
              className="w-10 h-10 rounded-lg object-cover border border-slate-200 shrink-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
