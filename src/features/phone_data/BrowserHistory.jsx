import React, { useState } from 'react';
import { Search, ChevronDown, Check, ShieldAlert } from 'lucide-react';

export default function BrowserHistory() {
  const [activeTab, setActiveTab] = useState('history');
  const [searchQuery, setSearchQuery] = useState('');

  const historyLogs = [
    {
      id: 1,
      time: '2022-02-13 11:23:04',
      status: 'Visited',
      url: 'https://www.clevguard.org',
      title: 'www.clevguard.org',
      duration: '1m40s',
      frequency: 5,
      blocked: false,
      hasDot: true
    },
    {
      id: 2,
      time: '2022-02-10 11:22:44',
      status: 'Blocked',
      url: 'https://www.google.com',
      title: 'www.google.com',
      duration: '-',
      frequency: 3,
      blocked: true,
      hasDot: false
    },
    {
      id: 3,
      time: '2022-02-09 11:22:27',
      status: 'Blocked',
      url: 'https://www.whatsapp.com',
      title: 'www.whatsapp.com',
      duration: '-',
      frequency: 1,
      blocked: true,
      hasDot: false
    },
    {
      id: 4,
      time: '2022-02-08 11:22:25',
      status: 'Visited',
      url: 'https://www.facebook.com',
      title: 'www.facebook.com',
      duration: '3h28m20s',
      frequency: 4,
      blocked: false,
      hasDot: false
    },
    {
      id: 5,
      time: '2022-02-07 11:22:00',
      status: 'Visited',
      url: 'https://www.amazon.com',
      title: 'www.amazon.com',
      duration: '8m32s',
      frequency: 15,
      blocked: false,
      hasDot: false
    },
    {
      id: 6,
      time: '2022-02-06 11:21:53',
      status: 'Visited',
      url: 'https://www.reddit.com',
      title: 'www.reddit.com',
      duration: '4m20s',
      frequency: 3,
      blocked: false,
      hasDot: false
    }
  ];

  const filteredLogs = historyLogs.filter(log => {
    return log.title.toLowerCase().includes(searchQuery.toLowerCase()) || log.url.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="bg-white rounded-2xl shadow-xs border border-slate-200/80 p-6 min-h-[720px] flex flex-col space-y-6">
      {/* Top Tab Switcher */}
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
            <span>Website Block</span>
            <span className="absolute top-0.5 -right-2.5 w-1.5 h-1.5 bg-red-500 rounded-full" />
          </button>
        </div>
      </div>

      {/* Top Filter and Search Bar */}
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

      {/* History Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-slate-50/50">
              <th className="py-3 px-4">Last Visit Time</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">URL</th>
              <th className="py-3 px-4">Title</th>
              <th className="py-3 px-4">Duration</th>
              <th className="py-3 px-4">Frequency</th>
              <th className="py-3 px-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
            {filteredLogs.map((log) => (
              <tr 
                key={log.id} 
                className={`hover:bg-slate-50/60 transition-colors ${
                  log.status === 'Blocked' ? 'bg-orange-50/20' : ''
                }`}
              >
                <td className="py-3.5 px-4 font-mono text-slate-500">{log.time}</td>
                <td className="py-3.5 px-4">
                  <div className="flex items-center space-x-1.5">
                    {log.status === 'Blocked' && <ShieldAlert className="w-3.5 h-3.5 text-orange-500 shrink-0" />}
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      log.status === 'Blocked' ? 'bg-orange-100 text-orange-700' : 'bg-slate-100 text-slate-700'
                    }`}>
                      {log.status}
                    </span>
                  </div>
                </td>
                <td className="py-3.5 px-4 max-w-[200px] truncate">
                  <a href={log.url} target="_blank" rel="noreferrer" className="text-cyan-600 hover:underline">
                    {log.url}
                  </a>
                </td>
                <td className="py-3.5 px-4 font-semibold text-slate-800">{log.title}</td>
                <td className="py-3.5 px-4 font-mono text-slate-500">{log.duration}</td>
                <td className="py-3.5 px-4 font-mono text-slate-700">{log.frequency}</td>
                <td className="py-3.5 px-4 text-right">
                  <button className={`font-bold transition-all relative ${
                    log.status === 'Blocked' ? 'text-orange-500 hover:text-orange-700' : 'text-cyan-500 hover:text-cyan-700'
                  }`}>
                    {log.status === 'Blocked' ? 'Allow' : 'Block'}
                    {log.hasDot && (
                      <span className="absolute -top-0.5 -right-2 w-1.5 h-1.5 bg-red-500 rounded-full" />
                    )}
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
