import React, { useState } from 'react';
import { ChevronDown, AlertCircle } from 'lucide-react';

export default function ExportData() {
  const [selectedModule, setSelectedModule] = useState('Call Logs');
  const [selectedItems, setSelectedItems] = useState('1-1000');
  const [format, setFormat] = useState('CSV');
  const [deleteAfterExport, setDeleteAfterExport] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-xs border border-slate-200/80 p-10 min-h-[680px] flex flex-col items-center justify-start">
      <div className="w-full max-w-xl space-y-8 mt-6">
        {/* Module select field */}
        <div className="flex flex-col sm:flex-row sm:items-center">
          <label className="w-24 text-xs font-bold text-slate-500 mb-1.5 sm:mb-0">Modules:</label>
          <div className="flex-1 relative">
            <select
              value={selectedModule}
              onChange={(e) => setSelectedModule(e.target.value)}
              className="w-full pl-3.5 pr-10 py-2.5 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 focus:outline-hidden focus:border-cyan-500 appearance-none bg-slate-55/30"
            >
              <option value="Call Logs">Call Logs</option>
              <option value="Messages">Messages</option>
              <option value="Browser History">Browser History</option>
              <option value="Keylogger">Keylogger</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3 pointer-events-none" />
          </div>
        </div>

        {/* Items select field */}
        <div className="flex flex-col sm:flex-row sm:items-center">
          <label className="w-24 text-xs font-bold text-slate-500 mb-1.5 sm:mb-0">Items:</label>
          <div className="flex-1 relative">
            <select
              value={selectedItems}
              onChange={(e) => setSelectedItems(e.target.value)}
              className="w-full pl-3.5 pr-10 py-2.5 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 focus:outline-hidden focus:border-cyan-500 appearance-none bg-slate-55/30"
            >
              <option value="1-1000">1-1000</option>
              <option value="1001-2000">1001-2000</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3 pointer-events-none" />
          </div>
        </div>

        {/* Format radio selection field */}
        <div className="flex flex-col sm:flex-row sm:items-center">
          <label className="w-24 text-xs font-bold text-slate-500 mb-1.5 sm:mb-0">Format:</label>
          <div className="flex-1 flex items-center space-x-4">
            <label className="flex items-center space-x-2 text-xs font-bold text-slate-700 cursor-pointer select-none">
              <input
                type="radio"
                name="format"
                value="CSV"
                checked={format === 'CSV'}
                onChange={() => setFormat('CSV')}
                className="text-cyan-600 focus:ring-cyan-500 w-4 h-4 border-slate-300"
              />
              <span>CSV</span>
            </label>
          </div>
        </div>

        {/* Delete exported data warning checkbox */}
        <div className="flex flex-col sm:flex-row sm:items-center pl-0 sm:pl-24">
          <label className="flex items-center space-x-2.5 text-xs font-semibold text-slate-600 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={deleteAfterExport}
              onChange={(e) => setDeleteAfterExport(e.target.checked)}
              className="rounded-xs border-slate-300 text-cyan-600 focus:ring-cyan-500 w-4 h-4"
            />
            <span>Delete exported data from the dashboard</span>
          </label>
        </div>

        {/* Cyan export button */}
        <div className="flex flex-col sm:flex-row sm:items-center pl-0 sm:pl-24">
          <button className="w-full py-3 bg-[#009bb3] hover:bg-[#008ba1] text-white rounded-full text-xs font-bold transition-all shadow-xs">
            Export
          </button>
        </div>

        {/* Bottom warning notes */}
        <div className="pt-6 border-t border-slate-100 flex items-start space-x-2 text-[11px] text-slate-400 leading-relaxed pl-0 sm:pl-24">
          <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p><span className="font-semibold text-slate-500">Notes:</span> 1. Media files can be directly download in each feature.</p>
            <p>2. Only 1000 records can be exported at a time.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
