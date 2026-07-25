import React, { useState } from 'react';
import { Search, ChevronDown, Bell } from 'lucide-react';

export default function TrackKeywords() {
  const [activeTab, setActiveTab] = useState('alerts');
  const [dateFilter, setDateFilter] = useState('All');
  const [appFilter, setAppFilter] = useState('All apps');

  const alerts = [
    {
      id: 1,
      keyword: 'drink',
      app: 'WhatsApp',
      message: 'We went for a drink last night.',
      time: '2022-05-17 20:00:00',
    },
    {
      id: 2,
      keyword: 'hurt',
      app: 'Instagram',
      message: 'It hurt me to think that he would lie to me.',
      time: '2022-05-17 17:21:08',
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xs border border-slate-200/80 p-6 min-h-[720px] flex flex-col space-y-6">
      {/* Tab Switcher */}
      <div className="flex items-center justify-center border-b border-slate-200">
        <div className="flex space-x-8 text-xs font-bold">
          <button
            onClick={() => setActiveTab('alerts')}
            className={`pb-3 flex items-center space-x-2 transition-all ${
              activeTab === 'alerts'
                ? 'border-b-2 border-cyan-500 text-cyan-600'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Bell className="w-4 h-4" />
            <span>Detected Alerts</span>
          </button>
          <button
            onClick={() => setActiveTab('add')}
            className={`pb-3 flex items-center space-x-2 transition-all ${
              activeTab === 'add'
                ? 'border-b-2 border-cyan-500 text-cyan-600'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <span>Add Keywords</span>
          </button>
        </div>
      </div>

      {/* Top Filters */}
      <div className="flex items-center space-x-3">
        <button className="flex items-center space-x-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors">
          <span>{dateFilter}</span>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
        </button>

        <button className="flex items-center space-x-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors">
          <span>{appFilter}</span>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
        </button>
      </div>

      {/* Alerts Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-slate-50/50">
              <th className="py-3 px-4">Keyword</th>
              <th className="py-3 px-4">Detected in</th>
              <th className="py-3 px-4">Message</th>
              <th className="py-3 px-4">Time</th>
              <th className="py-3 px-4 text-right">Details</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
            {alerts.map((alert) => (
              <tr key={alert.id} className="hover:bg-slate-50/60 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-red-500">{alert.keyword}</td>
                <td className="py-3.5 px-4 font-semibold text-slate-800">{alert.app}</td>
                <td className="py-3.5 px-4 text-slate-600">{alert.message}</td>
                <td className="py-3.5 px-4 font-mono text-slate-500">{alert.time}</td>
                <td className="py-3.5 px-4 text-right">
                  <button className="text-cyan-500 hover:text-cyan-700 font-semibold">
                    Details
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
