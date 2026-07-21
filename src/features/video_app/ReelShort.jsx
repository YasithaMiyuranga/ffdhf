import React, { useState } from 'react';
import { Search, Calendar, ChevronLeft, ChevronRight, User } from 'lucide-react';

const ReelShortBadge = () => (
  <div className="w-4 h-4 rounded-xs bg-red-600 text-white font-extrabold text-[9px] flex items-center justify-center shrink-0">
    R
  </div>
);

export default function ReelShort() {
  const [activeTab, setActiveTab] = useState('watch');
  const [selectedDate, setSelectedDate] = useState('2026-07-21');

  const watchHistory = [
    {
      id: 1,
      time: '09:27 AM',
      title: 'Top 10 pranks to try on friends',
      channel: '@LaughFactory',
      thumb: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=100&auto=format&fit=crop&q=80',
    },
    {
      id: 2,
      time: '10:02 AM',
      title: 'Trending dance challenges',
      channel: '@DanceDaily',
      thumb: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=100&auto=format&fit=crop&q=80',
    },
    {
      id: 3,
      time: '10:14 AM',
      title: 'Funniest fails of the week',
      channel: '@OopsAndLaughs',
      thumb: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80',
    },
    {
      id: 4,
      time: '06:28 PM',
      title: 'Back to school outfit ideas',
      channel: '@StyleSavvyTeens',
      thumb: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=100&auto=format&fit=crop&q=80',
    },
    {
      id: 5,
      time: '09:30 PM',
      title: 'Easy 5-minute crafts for teenagers',
      channel: '@CraftyKidz',
      thumb: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=100&auto=format&fit=crop&q=80',
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
            <ReelShortBadge />
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
            <p className="text-2xl font-extrabold text-cyan-600 mt-0.5">5</p>
          </div>
          <div className="border-l border-slate-200 pl-12">
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Screen Time</p>
            <p className="text-2xl font-extrabold text-cyan-600 mt-0.5">10m 27s</p>
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

        {/* List of Watched ReelShort Videos matching screenshot */}
        <div className="divide-y divide-slate-100 border-t border-slate-100">
          {watchHistory.map((item) => (
            <div key={item.id} className="py-3 flex items-center justify-between hover:bg-slate-50/50 px-2 rounded-lg transition-colors">
              <div className="flex items-start space-x-4">
                <span className="text-xs font-mono text-slate-400 w-16 shrink-0 pt-0.5">{item.time}</span>
                <ReelShortBadge />
                <div className="space-y-1">
                  <h4 className="text-xs font-semibold text-slate-800 hover:text-cyan-600 cursor-pointer">
                    {item.title}
                  </h4>
                  <div className="flex items-center space-x-1.5 text-[11px] text-slate-400">
                    <User className="w-3 h-3 text-slate-400" />
                    <span>{item.channel}</span>
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
    </div>
  );
}
