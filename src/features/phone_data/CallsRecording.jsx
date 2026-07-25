import React, { useState } from 'react';
import { Search, ChevronDown, Play, Download, Trash2, Calendar } from 'lucide-react';

export default function CallsRecording() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [dateFilter, setDateFilter] = useState('All');

  const recordings = [
    {
      id: 1,
      name: 'Aron',
      number: '1357665',
      type: 'Incoming',
      startTime: '2022-01-09 15:18:23',
      duration: '05:10',
    },
    {
      id: 2,
      name: 'Aron',
      number: '1357665',
      type: 'Incoming',
      startTime: '2022-01-09 15:08:44',
      duration: '00:40',
    },
    {
      id: 3,
      name: 'Jane',
      number: '1357662',
      type: 'Outgoing',
      startTime: '2022-01-01 12:48:12',
      duration: '01:31',
    }
  ];

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedItems(recordings.map(item => item.id));
    } else {
      setSelectedItems([]);
    }
  };

  const handleSelectItem = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(item => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const filteredRecordings = recordings.filter(item => {
    return item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.number.includes(searchQuery);
  });

  return (
    <div className="bg-white rounded-2xl shadow-xs border border-slate-200/80 p-6 min-h-[720px] flex flex-col space-y-6">
      {/* Table Header Filter controls */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center space-x-4">
          <label className="flex items-center space-x-2 text-xs font-semibold text-slate-700 cursor-pointer select-none">
            <input
              type="checkbox"
              onChange={handleSelectAll}
              checked={selectedItems.length === recordings.length && recordings.length > 0}
              className="rounded-sm border-slate-300 text-cyan-600 focus:ring-cyan-500 w-4 h-4"
            />
            <span>All Select</span>
          </label>
          <button 
            disabled={selectedItems.length === 0}
            className={`p-1.5 rounded-lg border transition-all ${
              selectedItems.length > 0 
                ? 'border-red-200 text-red-500 hover:bg-red-50/50 cursor-pointer' 
                : 'border-slate-100 text-slate-300 cursor-not-allowed'
            }`}
          >
            <Trash2 className="w-4 h-4" />
          </button>
          
          <button className="flex items-center space-x-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <span>{dateFilter}</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </button>
        </div>

        <div className="relative max-w-xs w-full">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-1.5 border border-slate-200 rounded-lg text-xs focus:outline-hidden focus:border-cyan-500 bg-slate-50/50"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2" />
        </div>
      </div>

      {/* Recordings Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-slate-50/50">
              <th className="py-3 px-4 w-12"></th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Phone Number</th>
              <th className="py-3 px-4">Type</th>
              <th className="py-3 px-4">Start Time</th>
              <th className="py-3 px-4">Duration</th>
              <th className="py-3 px-4 text-center">Audio</th>
              <th className="py-3 px-4 text-center">Download</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
            {filteredRecordings.map((rec) => (
              <tr key={rec.id} className="hover:bg-slate-50/60 transition-colors">
                <td className="py-3.5 px-4 w-12">
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(rec.id)}
                    onChange={() => handleSelectItem(rec.id)}
                    className="rounded-sm border-slate-300 text-cyan-600 focus:ring-cyan-500 w-4 h-4"
                  />
                </td>
                <td className="py-3.5 px-4 font-semibold text-slate-800">{rec.name}</td>
                <td className="py-3.5 px-4 font-mono text-slate-600">{rec.number}</td>
                <td className="py-3.5 px-4">
                  <span className={`font-semibold ${
                    rec.type === 'Incoming' ? 'text-green-600' : 'text-blue-600'
                  }`}>
                    {rec.type}
                  </span>
                </td>
                <td className="py-3.5 px-4 text-slate-500">{rec.startTime}</td>
                <td className="py-3.5 px-4 font-mono text-slate-500">{rec.duration}</td>
                <td className="py-3.5 px-4 text-center">
                  <button className="p-2 bg-slate-100 hover:bg-cyan-500 hover:text-white rounded-full text-slate-600 transition-all inline-flex items-center justify-center">
                    <Play className="w-4 h-4 fill-current" />
                  </button>
                </td>
                <td className="py-3.5 px-4 text-center">
                  <button className="p-2 bg-slate-100 hover:bg-cyan-500 hover:text-white rounded-full text-slate-600 transition-all inline-flex items-center justify-center">
                    <Download className="w-4 h-4" />
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
