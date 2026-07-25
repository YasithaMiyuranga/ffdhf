import React, { useState } from 'react';
import { Trash2, Play, Download, ChevronDown } from 'lucide-react';

export default function RecordSurround() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [noiseReduction, setNoiseReduction] = useState(true);

  const logs = [
    { id: 1, date: '2022-05-17 17:15:24', duration: '0:11' },
    { id: 2, date: '2022-05-17 16:14:51', duration: '0:26' },
    { id: 3, date: '2022-05-17 10:00:00', duration: '10:01' }
  ];

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedItems(logs.map(l => l.id));
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

  return (
    <div className="bg-white rounded-2xl shadow-xs border border-slate-200/80 p-6 min-h-[720px] flex flex-col space-y-6">
      {/* Top Filter and action controls */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-100 pb-4">
        <div className="flex items-center space-x-4">
          <label className="flex items-center space-x-2 text-xs font-semibold text-slate-700 cursor-pointer select-none">
            <input
              type="checkbox"
              onChange={handleSelectAll}
              checked={selectedItems.length === logs.length && logs.length > 0}
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
            <span>All</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </button>
        </div>

        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2 text-xs font-semibold text-slate-600">
            <div className="flex items-center space-x-1 text-cyan-600 bg-cyan-50 px-2 py-1 rounded-md text-[10px] font-bold">
              <span>AI</span>
              <span>AI-Noise Reduction</span>
            </div>
            <button
              onClick={() => setNoiseReduction(!noiseReduction)}
              className={`w-9 h-5 rounded-full p-0.5 transition-colors ${
                noiseReduction ? 'bg-cyan-500' : 'bg-slate-300'
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white transition-transform ${
                  noiseReduction ? 'translate-x-4' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          <button className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-bold text-xs rounded-lg flex items-center space-x-1.5 shadow-sm transition-all">
            <span>Record Now</span>
            <ChevronDown className="w-3.5 h-3.5 text-white/80" />
          </button>
        </div>
      </div>

      {/* Record Logs Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-slate-50/50">
              <th className="py-3 px-4 w-12"></th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Duration</th>
              <th className="py-3 px-4 text-center">Audio</th>
              <th className="py-3 px-4 text-center">Download</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
            {logs.map((log) => (
              <tr key={log.id} className="hover:bg-slate-50/60 transition-colors">
                <td className="py-3.5 px-4 w-12">
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(log.id)}
                    onChange={() => handleSelectItem(log.id)}
                    className="rounded-sm border-slate-300 text-cyan-600 focus:ring-cyan-500 w-4 h-4"
                  />
                </td>
                <td className="py-3.5 px-4 font-semibold text-slate-850">{log.date}</td>
                <td className="py-3.5 px-4 font-mono text-slate-500">{log.duration}</td>
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
