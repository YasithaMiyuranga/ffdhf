import React from 'react';
import { Download, FileText } from 'lucide-react';

export default function ExportData() {
  return (
    <div className="bg-white rounded-2xl shadow-xs border border-slate-200/80 p-8 min-h-[720px] flex flex-col items-center justify-center text-center space-y-6">
      <div className="w-16 h-16 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600">
        <Download className="w-8 h-8" />
      </div>
      <div className="space-y-2 max-w-sm">
        <h2 className="text-sm font-bold text-slate-800">Export All Tracked Device Data</h2>
        <p className="text-xs text-slate-400 leading-relaxed">
          Generate and download a comprehensive CSV or JSON report containing all logged events, messages, and calls history.
        </p>
      </div>
      <button className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-600 text-white rounded-xl text-xs font-bold transition-colors shadow-sm">
        Generate Report
      </button>
    </div>
  );
}
