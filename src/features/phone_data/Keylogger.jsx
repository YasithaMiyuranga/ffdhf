import React, { useState } from 'react';
import { Search, Calendar, ChevronLeft, ChevronRight, MessageSquare, Sparkles, FileText } from 'lucide-react';

const YelpIcon = () => (
  <div className="w-5 h-5 bg-red-600 rounded-sm flex items-center justify-center text-white text-[10px] font-extrabold shrink-0">
    Y
  </div>
);

const YouTubeIcon = () => (
  <svg className="w-5 h-5 text-red-600 shrink-0" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const ChromeIcon = () => (
  <svg className="w-5 h-5 text-blue-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="4" />
    <line x1="21.17" y1="8" x2="12" y2="8" />
    <line x1="3.95" y1="6.06" x2="8.54" y2="14" />
    <line x1="10.88" y1="21.94" x2="15.46" y2="14" />
  </svg>
);

export default function Keylogger() {
  const [activeApp, setActiveApp] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDate, setSelectedDate] = useState('2024-05-06');

  const appLogsList = [
    {
      id: 1,
      name: 'YouTube',
      time: '2024-05-06 00:07:59',
      snippet: 'sexy',
      icon: <YouTubeIcon />
    },
    {
      id: 2,
      name: 'Yelp',
      time: '2024-05-03 21:43:23',
      snippet: 'cocktail bar',
      icon: <YelpIcon />
    },
    {
      id: 3,
      name: 'Chrome',
      time: '2024-05-02 08:43:25',
      snippet: 'Should I apologize after cheating?',
      icon: <ChromeIcon />
    },
    {
      id: 4,
      name: 'Memo',
      time: '2024-05-01 20:29:38',
      snippet: "Gigi's club, white tight skirt",
      icon: <FileText className="w-5 h-5 text-amber-500" />
    }
  ];

  const typedWordsHistory = {
    1: [
      { id: 1, text: 'porn websites', time: '2024-04-25 23:33:51' },
      { id: 2, text: 'sex video', time: '2024-04-27 22:30:46' },
      { id: 3, text: 'How delete search history', time: '2024-04-28 00:19:27' },
      { id: 4, text: 'tips for first date', time: '2024-05-01 00:46:21' },
      { id: 5, text: 'Should I apologize after cheating?', time: '2024-05-02 08:43:25' }
    ],
    2: [
      { id: 1, text: 'cocktail bar near me', time: '2024-05-03 21:43:23' }
    ],
    3: [
      { id: 1, text: 'Should I apologize after cheating?', time: '2024-05-02 08:43:25' }
    ],
    4: [
      { id: 1, text: "Gigi's club, white tight skirt", time: '2024-05-01 20:29:38' }
    ]
  };

  const filteredHistory = (typedWordsHistory[activeApp] || []).filter(item => {
    return item.text.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="bg-white rounded-2xl shadow-xs border border-slate-200/80 min-h-[720px] flex overflow-hidden">
      {/* Left Apps Switcher */}
      <div className="w-1/3 border-r border-slate-200 flex flex-col">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <span className="text-xs font-bold text-slate-800">Applications</span>
        </div>
        <div className="flex-1 overflow-y-auto divide-y divide-slate-50">
          {appLogsList.map((app) => (
            <button
              key={app.id}
              onClick={() => {
                setActiveApp(app.id);
                setSelectedDate(app.time.split(' ')[0]);
              }}
              className={`w-full p-4 text-left flex items-start space-x-3 transition-colors ${
                activeApp === app.id ? 'bg-cyan-50/50 border-l-4 border-cyan-500' : 'hover:bg-slate-50/50'
              }`}
            >
              <div className="p-2 bg-slate-100 rounded-lg shrink-0 flex items-center justify-center">
                {app.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-0.5">
                  <span className="text-xs font-bold text-slate-800">{app.name}</span>
                  <span className="text-[10px] text-slate-400 font-mono">{app.time.split(' ')[0]}</span>
                </div>
                <p className="text-[11px] text-slate-500 truncate">{app.snippet}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Right Logs Chat Box */}
      <div className="flex-1 flex flex-col bg-slate-50/30">
        {/* Chat Header controls */}
        <div className="p-4 bg-white border-b border-slate-200 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center space-x-2 border border-slate-200 rounded-lg px-2.5 py-1.5 text-[11px] text-slate-600 bg-white">
            <button className="hover:text-slate-900 text-slate-400">
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <div className="flex items-center space-x-1.5 font-medium">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>{selectedDate}</span>
            </div>
            <button className="hover:text-slate-900 text-slate-400">
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="relative max-w-xs">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8 pr-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:outline-hidden focus:border-cyan-500 bg-slate-50/50"
            />
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2" />
          </div>
        </div>

        {/* Typed Words List */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4">
          {filteredHistory.map((item) => (
            <div key={item.id} className="flex justify-start">
              <div className="max-w-[85%] space-y-1">
                <div className="bg-cyan-50/80 border border-cyan-100 rounded-2xl rounded-tl-none p-3.5 text-xs text-cyan-900 leading-relaxed shadow-3xs">
                  {item.text}
                </div>
                <p className="text-[9px] text-slate-400 font-mono pl-1">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
