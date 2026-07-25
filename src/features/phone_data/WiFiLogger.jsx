import React, { useState } from 'react';
import { Search, ChevronDown, Wifi, ShieldAlert } from 'lucide-react';

export default function WiFiLogger() {
  const [activeTab, setActiveTab] = useState('history');
  const [searchQuery, setSearchQuery] = useState('');

  const wifiLogs = [
    {
      id: 1,
      name: "Tribbiana's Home",
      start: '2022-01-31 16:00:00',
      end: '2022-01-31 17:00:00',
      duration: '01:44:53',
      location: '528-616 Mariposa, New York, United States',
    },
    {
      id: 2,
      name: "Asper's Wi-Fi",
      start: '2022-01-30 10:00:00',
      end: '2022-01-30 14:22:43',
      duration: '04:22:43',
      location: '528-616 Anderson Hill Rd Purchase, NY 10577',
    },
    {
      id: 3,
      name: 'Test',
      start: '2022-01-01 14:21:53',
      end: '2022-01-01 16:04:00',
      duration: '01:00:00',
      location: '528-616 Anderson Hill Rd Purchase, NY 10577',
    }
  ];

  const filteredLogs = wifiLogs.filter(log => {
    return log.name.toLowerCase().includes(searchQuery.toLowerCase()) || log.location.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="bg-white rounded-2xl shadow-xs border border-slate-200/80 p-6 min-h-[720px] flex flex-col space-y-6">
      {/* Tab Switcher */}
      <div className="flex items-center justify-center border-b border-slate-200">
        <div className="flex space-x-8 text-xs font-bold">
          <button
            onClick={() => setActiveTab('history')}
            className={`pb-3 flex items-center space-x-2 transition-all ${
              activeTab === 'history'
                ? 'border-b-2 border-cyan-500 text-cyan-600'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <span>History</span>
          </button>
          <button
            onClick={() => setActiveTab('block')}
            className={`pb-3 flex items-center space-x-2 transition-all relative ${
              activeTab === 'block'
                ? 'border-b-2 border-cyan-500 text-cyan-600'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <span>WiFi Block</span>
            <span className="absolute top-0.5 -right-2.5 w-1.5 h-1.5 bg-red-500 rounded-full" />
          </button>
        </div>
      </div>

      {/* Filter and Search */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <button className="flex items-center space-x-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors self-start">
          <span>All</span>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
        </button>

        <div className="relative max-w-xs w-full">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-xs focus:outline-hidden focus:border-cyan-500 bg-slate-50/50"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
        </div>
      </div>

      {/* WiFi Logs Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-slate-50/50">
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Start Time</th>
              <th className="py-3 px-4">End Time</th>
              <th className="py-3 px-4">Duration</th>
              <th className="py-3 px-4">Wifi Location</th>
              <th className="py-3 px-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
            {filteredLogs.map((log) => (
              <tr key={log.id} className="hover:bg-slate-50/60 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-800">
                  <div className="flex items-center space-x-2">
                    <Wifi className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>{log.name}</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 font-mono text-slate-500">{log.start}</td>
                <td className="py-3.5 px-4 font-mono text-slate-500">{log.end}</td>
                <td className="py-3.5 px-4 font-mono text-slate-600">{log.duration}</td>
                <td className="py-3.5 px-4 max-w-[240px] truncate text-cyan-600 hover:underline cursor-pointer">
                  {log.location}
                </td>
                <td className="py-3.5 px-4 text-right">
                  <button className="text-cyan-500 hover:text-cyan-700 font-bold">
                    Manage
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
