import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, PhoneIncoming, PhoneOutgoing, PhoneOff, AlertTriangle } from 'lucide-react';
import { api } from '../../services/api';

export default function Calls() {
  const [dateFilter, setDateFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [callLogs, setCallLogs] = useState([]);

  const defaultMockLogs = [
    {
      id: 'mock-1',
      name: 'H. K. Skip Pita',
      number: '415-356-2000',
      status: 'Called',
      type: 'Outgoing',
      duration: '01:24:03',
      date: '2022-02-06 15:37:28',
      blocked: false,
      hasDot: true
    },
    {
      id: 'mock-2',
      name: 'David Rudolph',
      number: '888-276-7202',
      status: 'Blocked',
      type: 'Cancelled',
      duration: '00:00:00',
      date: '2022-02-06 15:36:12',
      blocked: true,
      hasDot: false
    },
    {
      id: 'mock-3',
      name: 'David Rudolph',
      number: '888-276-7202',
      status: 'Blocked',
      type: 'Outgoing',
      duration: '00:05:10',
      date: '2022-02-06 15:25:04',
      blocked: true,
      hasDot: false
    },
    {
      id: 'mock-4',
      name: 'H. K. Skip Pita',
      number: '415-356-2000',
      status: 'Called',
      type: 'Incoming',
      duration: '00:03:51',
      date: '2022-02-06 09:06:50',
      blocked: false,
      hasDot: false
    },
    {
      id: 'mock-5',
      name: 'H. K. Skip Pita',
      number: '415-356-2000',
      status: 'Called',
      type: 'Incoming',
      duration: '00:28:04',
      date: '2022-02-05 19:24:00',
      blocked: false,
      hasDot: false
    },
    {
      id: 'mock-6',
      name: 'David Rudolph',
      number: '888-276-7202',
      status: 'Called',
      type: 'Outgoing',
      duration: '00:10:00',
      date: '2022-02-05 15:36:00',
      blocked: false,
      hasDot: false
    },
    {
      id: 'mock-7',
      name: 'David Rudolph',
      number: '888-276-7202',
      status: 'Called',
      type: 'Cancelled',
      duration: '00:00:00',
      date: '2022-02-05 12:23:02',
      blocked: false,
      hasDot: false
    },
    {
      id: 'mock-8',
      name: 'Louis Besson',
      number: '800-523-0201',
      status: 'Called',
      type: 'Outgoing',
      duration: '02:10:20',
      date: '2022-02-04 13:35:31',
      blocked: false,
      hasDot: false
    },
    {
      id: 'mock-9',
      name: 'Louis Besson',
      number: '800-523-0201',
      status: 'Called',
      type: 'Outgoing',
      duration: '00:09:54',
      date: '2022-02-04 10:15:01',
      blocked: false,
      hasDot: false
    },
    {
      id: 'mock-10',
      name: 'Louis Besson',
      number: '800-523-0201',
      status: 'Called',
      type: 'Cancelled',
      duration: '00:00:00',
      date: '2022-02-04 10:00:31',
      blocked: false,
      hasDot: false
    }
  ];

  useEffect(() => {
    async function loadCalls() {
      const serverLogs = await api.getLogs('call');
      if (serverLogs && serverLogs.length > 0) {
        const formattedLogs = serverLogs.map((item, index) => ({
          id: item._id || index,
          name: item.details.name || 'Unknown',
          number: item.details.phoneNumber || 'Unknown',
          status: item.details.callType === 'blocked' ? 'Blocked' : 'Called',
          type: item.details.callType === 'incoming' ? 'Incoming' : item.details.callType === 'outgoing' ? 'Outgoing' : 'Cancelled',
          duration: item.details.duration || '00:00:00',
          date: new Date(item.timestamp).toISOString().replace('T', ' ').substring(0, 19),
          blocked: item.details.callType === 'blocked',
          hasDot: index === 0 // Mark newest as dot
        }));
        // Merge database logs at the top
        setCallLogs([...formattedLogs, ...defaultMockLogs]);
      } else {
        setCallLogs(defaultMockLogs);
      }
    }
    loadCalls();
  }, []);

  const getStatusIcon = (type, status) => {
    if (status === 'Blocked') {
      return (
        <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 shrink-0">
          <PhoneOff className="w-4 h-4" />
        </div>
      );
    }
    if (type === 'Incoming') {
      return (
        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
          <PhoneIncoming className="w-4 h-4" />
        </div>
      );
    }
    if (type === 'Outgoing') {
      return (
        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
          <PhoneOutgoing className="w-4 h-4" />
        </div>
      );
    }
    return (
      <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500 shrink-0">
        <PhoneOff className="w-4 h-4" />
      </div>
    );
  };

  const filteredLogs = callLogs.filter(log => {
    const matchesSearch = log.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          log.number.includes(searchQuery);
    return matchesSearch;
  });

  return (
    <div className="bg-white rounded-2xl shadow-xs border border-slate-200/80 p-6 min-h-[720px] flex flex-col space-y-6">
      {/* Top Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* Dropdown Filter */}
        <div className="relative inline-block">
          <button className="flex items-center space-x-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors">
            <span>{dateFilter}</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </button>
        </div>

        {/* Search Input */}
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

      {/* Call Logs Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-slate-50/50">
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Phone Number</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Type</th>
              <th className="py-3 px-4">Duration</th>
              <th className="py-3 px-4">Date</th>
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
                <td className="py-3.5 px-4">
                  <div className="flex items-center space-x-3">
                    {getStatusIcon(log.type, log.status)}
                    <span className="font-semibold text-slate-800">{log.name}</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 font-mono text-slate-600">{log.number}</td>
                <td className="py-3.5 px-4">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                    log.status === 'Blocked' ? 'bg-orange-100 text-orange-700' : 'bg-slate-100 text-slate-700'
                  }`}>
                    {log.status}
                  </span>
                </td>
                <td className="py-3.5 px-4">
                  <span className={`font-semibold ${
                    log.type === 'Incoming' ? 'text-green-600' : 
                    log.type === 'Outgoing' ? 'text-blue-600' : 'text-red-500'
                  }`}>
                    {log.type}
                  </span>
                </td>
                <td className="py-3.5 px-4 font-mono text-slate-500">{log.duration}</td>
                <td className="py-3.5 px-4 text-slate-500">{log.date}</td>
                <td className="py-3.5 px-4 text-right">
                  <button className="text-cyan-500 hover:text-cyan-700 font-bold transition-all relative">
                    Block
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
