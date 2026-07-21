import React, { useState } from 'react';
import {
  Clock,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ShieldAlert
} from 'lucide-react';

const TikTokIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 1 0 5.55 6.29V9.41a8.27 8.27 0 0 0 4.77 1.52V7.47a4.85 4.85 0 0 1-1.0-.78z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-5 h-5 text-emerald-500" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);

export default function ScreenTimeChart() {
  const [period, setPeriod] = useState('Day');
  const [selectedDate, setSelectedDate] = useState('2026-07-21');

  const appLimits = [
    { name: 'TikTok', time: '3h 52m 0s', color: 'bg-sky-500', icon: 'tiktok', isHot: true },
    { name: 'WhatsApp', time: '2h 51m 0s', color: 'bg-emerald-500', icon: 'whatsapp' },
    { name: 'Monopoly Go!', time: '2h 23m 0s', color: 'bg-amber-500', icon: 'game' },
    { name: 'AnyConnect', time: '1h 21m 11s', color: 'bg-indigo-500', icon: 'net' },
    { name: 'Forest', time: '1h 01m 25s', color: 'bg-green-600', icon: 'tree' },
    { name: 'Messenger', time: '15m 26s', color: 'bg-blue-600', icon: 'msg' },
    { name: 'Fake GPS', time: '8m 41s', color: 'bg-rose-500', icon: 'gps' },
  ];

  // Dummy stacked bar data for hourly chart
  const hourlyBars = Array.from({ length: 24 }, (_, i) => ({
    hour: i,
    tiktok: Math.floor(Math.random() * 45),
    whatsapp: Math.floor(Math.random() * 35),
    game: Math.floor(Math.random() * 25),
    other: Math.floor(Math.random() * 15),
  }));

  return (
    <div className="space-y-6">
      {/* Top Card: Total Screen Time & Bar Chart */}
      <div className="bg-white rounded-2xl p-6 shadow-xs border border-slate-200/80">
        {/* Day / Week Switcher */}
        <div className="flex items-center justify-center border-b border-slate-200 pb-4 mb-6">
          <div className="flex space-x-1 bg-slate-100 p-1 rounded-xl">
            <button
              onClick={() => setPeriod('Day')}
              className={`px-6 py-1.5 rounded-lg text-xs font-bold transition-all ${
                period === 'Day'
                  ? 'bg-white text-cyan-600 shadow-xs'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Day
            </button>
            <button
              onClick={() => setPeriod('Week')}
              className={`px-6 py-1.5 rounded-lg text-xs font-bold transition-all ${
                period === 'Week'
                  ? 'bg-white text-cyan-600 shadow-xs'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Week
            </button>
          </div>
        </div>

        {/* Title and Date Picker */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-sm font-bold text-slate-800 border-l-4 border-cyan-500 pl-3">
            Total Screen Time
          </h2>

          <div className="flex items-center space-x-2 border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-600 shadow-2xs">
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

        {/* Hourly Usage Chart Mockup */}
        <div className="h-64 flex items-end justify-between gap-1 pt-8 pb-4 border-b border-slate-100 px-4">
          {hourlyBars.map((bar, idx) => {
            const total = bar.tiktok + bar.whatsapp + bar.game + bar.other;
            return (
              <div key={idx} className="flex-1 flex flex-col items-center group relative">
                <div className="w-full max-w-[14px] flex flex-col justify-end h-48 rounded-t overflow-hidden">
                  <div style={{ height: `${bar.other}%` }} className="bg-sky-400 w-full" />
                  <div style={{ height: `${bar.game}%` }} className="bg-amber-400 w-full" />
                  <div style={{ height: `${bar.whatsapp}%` }} className="bg-emerald-400 w-full" />
                  <div style={{ height: `${bar.tiktok}%` }} className="bg-cyan-600 w-full" />
                </div>
                {idx % 6 === 0 && (
                  <span className="text-[10px] text-slate-400 mt-2 font-mono">{idx}:00</span>
                )}
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center space-x-8 pt-4 text-xs font-semibold">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-cyan-600 rounded-sm"></span>
            <span className="text-slate-600">TikTok <span className="text-slate-400 font-normal ml-1">03h 52m 0s</span></span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-emerald-400 rounded-sm"></span>
            <span className="text-slate-600">WhatsApp <span className="text-slate-400 font-normal ml-1">02h 51m 0s</span></span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-amber-400 rounded-sm"></span>
            <span className="text-slate-600">Monopoly Go! <span className="text-slate-400 font-normal ml-1">02h 23m 0s</span></span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-sky-400 rounded-sm"></span>
            <span className="text-slate-600">other <span className="text-slate-400 font-normal ml-1">04h 37m 0s</span></span>
          </div>
        </div>
      </div>

      {/* Bottom Card: App Usage List */}
      <div className="bg-white rounded-2xl p-6 shadow-xs border border-slate-200/80">
        <h2 className="text-sm font-bold text-slate-800 border-l-4 border-cyan-500 pl-3 mb-6">
          App Usage
        </h2>

        <div className="space-y-5">
          {appLimits.map((app, idx) => (
            <div key={idx} className="flex items-center justify-between text-xs">
              {/* App Icon and Name */}
              <div className="flex items-center space-x-3 w-44 shrink-0">
                <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center font-bold text-slate-700">
                  {app.icon === 'tiktok' ? (
                    <TikTokIcon />
                  ) : app.icon === 'whatsapp' ? (
                    <WhatsAppIcon />
                  ) : (
                    <span>{app.name[0]}</span>
                  )}
                </div>
                <span className="font-semibold text-slate-800">{app.name}</span>
              </div>

              {/* Progress Bar */}
              <div className="flex-1 mx-6 flex items-center space-x-3">
                <div className="flex-1 bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className={`${app.color} h-full rounded-full`} style={{ width: `${85 - idx * 10}%` }} />
                </div>
                <span className="text-slate-500 font-medium w-16 text-right">{app.time}</span>
              </div>

              {/* App Limit Button */}
              <button className="flex items-center space-x-1 text-xs text-slate-500 hover:text-cyan-600 font-medium transition-colors border border-slate-200 hover:border-cyan-300 px-3 py-1 rounded-lg bg-slate-50">
                <Clock className="w-3.5 h-3.5" />
                <span>App Limit</span>
                {app.isHot && <span className="w-1.5 h-1.5 bg-red-500 rounded-full ml-1"></span>}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
