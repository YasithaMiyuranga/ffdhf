import React from 'react';
import { Phone, Users, Clock, Flame } from 'lucide-react';

export default function ActivityStats() {
  const topContacts = [
    { name: 'Barbara', times: '100 times', avatarBg: 'bg-emerald-500', percent: '90%' },
    { name: 'Ella', times: '90 times', avatarBg: 'bg-pink-500', percent: '80%' },
    { name: 'John', times: '80 times', avatarBg: 'bg-blue-500', percent: '70%' },
    { name: 'Thomas', times: '70 times', avatarBg: 'bg-amber-500', percent: '60%' },
  ];

  const topCalls = [
    { name: 'Zoe', duration: '02h 00m 00s', avatarBg: 'bg-cyan-500', percent: '85%' },
    { name: 'Noah', duration: '01h 30m 00s', avatarBg: 'bg-purple-500', percent: '65%' },
    { name: 'Camila', duration: '01h 00m 00s', avatarBg: 'bg-indigo-500', percent: '45%' },
    { name: 'William', duration: '30m 00s', avatarBg: 'bg-rose-500', percent: '25%' },
  ];

  const appUsage = [
    { name: 'TikTok', time: '3h 52m 0s', color: 'bg-slate-900', percent: '85%' },
    { name: 'WhatsApp', time: '2h 51m 0s', color: 'bg-green-500', percent: '65%' },
    { name: 'Monopoly Go!', time: '2h 23m 0s', color: 'bg-orange-500', percent: '55%' },
    { name: 'AnyConnect', time: '1h 21m 11s', color: 'bg-sky-500', percent: '35%' },
    { name: 'Forest', time: '1h 01m 25s', color: 'bg-amber-500', percent: '25%' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      {/* Most Contacts & Calls Card */}
      <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200/80 space-y-6">
        {/* Most Contacts */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-emerald-600" />
              <h3 className="text-sm font-bold text-slate-800">Most Contacts in 7 days</h3>
            </div>
            <span className="text-xs text-slate-400">Frequency</span>
          </div>

          <div className="space-y-3">
            {topContacts.map((c, idx) => (
              <div key={idx} className="flex items-center space-x-3 text-xs">
                <div className={`w-7 h-7 rounded-full ${c.avatarBg} text-white flex items-center justify-center font-bold text-[11px]`}>
                  {c.name[0]}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between font-semibold text-slate-700 mb-1">
                    <span>{c.name}</span>
                    <span className="text-slate-500 font-normal">{c.times}</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-emerald-500 h-full rounded-full" style={{ width: c.percent }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-slate-100" />

        {/* Most Calls */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-cyan-600" />
              <h3 className="text-sm font-bold text-slate-800">Most Calls in 7 days</h3>
            </div>
            <span className="text-xs text-slate-400">Duration</span>
          </div>

          <div className="space-y-3">
            {topCalls.map((c, idx) => (
              <div key={idx} className="flex items-center space-x-3 text-xs">
                <div className={`w-7 h-7 rounded-full ${c.avatarBg} text-white flex items-center justify-center font-bold text-[11px]`}>
                  {c.name[0]}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between font-semibold text-slate-700 mb-1">
                    <span>{c.name}</span>
                    <span className="text-slate-500 font-normal">{c.duration}</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-cyan-500 h-full rounded-full" style={{ width: c.percent }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Screen Time & App Usage */}
      <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200/80 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-sky-600" />
              <h3 className="text-sm font-bold text-slate-800">Total Screen Time</h3>
            </div>
            <span className="text-xs text-slate-400">Today</span>
          </div>

          {/* Screen Time Big Metric Card */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="p-3.5 bg-sky-50 rounded-xl border border-sky-100 text-center">
              <p className="text-xs text-sky-600 font-semibold">Screen Time Today</p>
              <p className="text-xl font-black text-sky-900 mt-1">13h 43m 0s</p>
            </div>
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-center">
              <p className="text-xs text-slate-500 font-semibold">Last Use Today</p>
              <p className="text-xl font-bold text-slate-800 mt-1">17:25:04</p>
            </div>
          </div>

          {/* App Usage List */}
          <h4 className="text-xs font-bold text-slate-700 mb-3">Most Used Apps Today</h4>
          <div className="space-y-3">
            {appUsage.map((app, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-slate-700">
                  <span>{app.name}</span>
                  <span className="text-slate-500">{app.time}</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div className={`${app.color} h-full rounded-full`} style={{ width: app.percent }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
