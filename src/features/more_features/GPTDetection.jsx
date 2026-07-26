import React, { useState } from 'react';
import { Search, Calendar, ChevronRight } from 'lucide-react';

export default function GPTDetection() {
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [searchQuery, setSearchQuery] = useState('');

  const logs = [
    {
      id: 1,
      timestamp: '2024-09-19 13:30:50',
      screenshot: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&auto=format&fit=crop&q=80',
      prompt: 'What do I need to make the most of my time?',
      promptTime: '2024-09-19 13:30:56',
      source: 'Keylogger'
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xs border border-slate-200/80 p-6 min-h-[720px] flex flex-col space-y-6">
      {/* ChatGPT header logo tab */}
      <div className="flex items-center space-x-3 border-b border-slate-100 pb-4">
        <div className="flex items-center space-x-2 border-b-2 border-cyan-500 pb-2 text-xs font-bold text-cyan-600">
          <div className="w-6 h-6 rounded-md bg-emerald-600 flex items-center justify-center text-white text-xs font-bold font-serif shrink-0">
            GPT
          </div>
          <span>ChatGPT</span>
        </div>
      </div>

      {/* Info notice banner */}
      <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-3.5 flex items-center justify-between text-xs text-slate-500">
        <span>More AI tools will be supported soon—stay tuned for updates!</span>
        <button className="text-slate-400 hover:text-slate-600 font-bold">×</button>
      </div>

      {/* Top Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center space-x-2 border border-slate-200 rounded-lg px-2.5 py-1.5 text-[11px] text-slate-600 bg-white">
          <input
            type="date"
            value={dateRange.start}
            onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
            className="border-none focus:outline-hidden p-0 bg-transparent text-slate-700 w-24"
          />
          <span className="text-slate-400 font-semibold">-</span>
          <input
            type="date"
            value={dateRange.end}
            onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
            className="border-none focus:outline-hidden p-0 bg-transparent text-slate-700 w-24"
          />
        </div>

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

      {/* Screenshot & Keylogger transcript columns layout */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {logs.map((log) => (
          <React.Fragment key={log.id}>
            {/* Left Screenshot Card */}
            <div className="space-y-3">
              <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Screenshot</h4>
              <div className="bg-slate-100 rounded-xl overflow-hidden border border-slate-200/80 shadow-xs flex flex-col p-4">
                <div className="aspect-[9/16] w-full max-w-[240px] mx-auto rounded-lg overflow-hidden bg-slate-900 border border-slate-200">
                  <img
                    src={log.screenshot}
                    alt="ChatGPT screenshot log"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-[10px] text-slate-400 font-mono text-center mt-3">{log.timestamp}</p>
              </div>
            </div>

            {/* Right Chat prompt transcript bubble */}
            <div className="space-y-4">
              <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider text-right">Prompt</h4>
              <div className="flex flex-col items-end space-y-2">
                <span className="text-[9px] font-bold text-slate-400">{log.source}</span>
                <div className="max-w-[90%] bg-cyan-50/80 border border-cyan-100 rounded-2xl rounded-tr-none p-4 text-xs text-cyan-900 leading-relaxed shadow-3xs">
                  {log.prompt}
                </div>
                <span className="text-[9px] text-slate-400 font-mono pr-1">{log.promptTime}</span>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
