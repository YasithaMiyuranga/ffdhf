import React, { useState } from 'react';
import { Search, Trash2, Video, Mic, Play, Download, ChevronDown } from 'lucide-react';

const WhatsAppSvg = () => (
  <svg className="w-7 h-7 text-emerald-500" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);

const LineSvg = () => (
  <svg className="w-7 h-7 text-green-500" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.34 10.04c0-4.32-4.19-7.84-9.34-7.84-5.15 0-9.34 3.52-9.34 7.84 0 3.87 3.3 7.12 7.76 7.73.3.06.72.2.82.47.09.25.06.64.03.9-.05.28-.24.96-.28 1.16-.08.38-.37 1.47 1.29.8 1.66-.67 4.48-2.64 6.11-4.52 1.83-2.02 2.99-4.14 2.99-6.54z"/>
  </svg>
);

const InstagramSvg = () => (
  <svg className="w-7 h-7 text-pink-600" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const FacebookSvg = () => (
  <svg className="w-7 h-7 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const TelegramSvg = () => (
  <svg className="w-7 h-7 text-sky-500" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm5.221 8.243c-.158.558-1.079 5.03-1.568 7.422-.207 1.011-.564 1.35-.91 1.383-.755.071-1.328-.5-2.06-1.01-.157-.109-2.062-1.306-2.296-1.503-.321-.271-.628-.415-.05-.989.135-.134 2.474-2.268 2.52-2.464.006-.027.012-.13-.047-.183-.06-.052-.149-.034-.213-.02-.09.02-1.528.97-4.316 2.852-.408.281-.778.418-1.11.411-.366-.008-1.07-.207-1.593-.378-.642-.209-1.15-.319-1.106-.673.023-.185.28-.375.77-.57 3.018-1.314 5.032-2.181 6.042-2.601 2.883-1.2 3.483-1.409 3.874-1.416.086 0 .28.02.404.122.105.086.134.204.148.286.015.082.033.267.018.42z"/>
  </svg>
);

export default function AppCalls() {
  const [selectedApp, setSelectedApp] = useState('whatsapp');

  const appList = [
    { id: 'whatsapp', name: 'WhatsApp', icon: WhatsAppSvg },
    { id: 'line', name: 'LINE', icon: LineSvg },
    { id: 'instagram', name: 'Instagram', icon: InstagramSvg },
    { id: 'facebook', name: 'Facebook', icon: FacebookSvg },
    { id: 'telegram', name: 'Telegram', icon: TelegramSvg },
  ];

  // Calls list matching reference screenshot 1
  const callsData = [
    { id: 1, name: 'Aron', type: 'Incoming', time: '2022-01-09 15:18:22', duration: '05:10', isVideo: true },
    { id: 2, name: 'Aron', type: 'Outgoing', time: '2022-01-09 15:08:22', duration: '00:40', isVideo: false },
    { id: 3, name: 'Jane', type: 'Incoming', time: '2022-01-01 12:48:22', duration: '01:31', isVideo: false },
    { id: 4, name: 'Jane', type: 'Incoming', time: '2022-01-01 12:48:22', duration: '01:31', isVideo: true },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xs border border-slate-200/80 overflow-hidden flex h-[720px]">
      {/* Left App List Column */}
      <div className="w-64 border-r border-slate-200 shrink-0 bg-slate-50/50">
        <div className="divide-y divide-slate-100">
          {appList.map((app) => {
            const IconComponent = app.icon;
            const isSelected = selectedApp === app.id;
            return (
              <button
                key={app.id}
                onClick={() => setSelectedApp(app.id)}
                className={`w-full p-4 flex items-center space-x-4 transition-all text-left ${
                  isSelected ? 'bg-[#e0f7fa] font-bold text-slate-900 border-l-4 border-cyan-500' : 'hover:bg-slate-100 text-slate-700'
                }`}
              >
                <IconComponent />
                <span className="text-sm font-semibold">{app.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Right Calls Data Table View */}
      <div className="flex-1 flex flex-col bg-white">
        {/* Top Control Bar */}
        <div className="p-4 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center space-x-4 text-xs text-slate-600">
            <label className="flex items-center space-x-2 cursor-pointer font-medium">
              <input type="checkbox" className="rounded border-slate-300 text-cyan-600 focus:ring-cyan-500" />
              <span>Select All</span>
            </label>

            <button className="p-1.5 text-slate-400 hover:text-red-500 transition-colors">
              <Trash2 className="w-4 h-4" />
            </button>

            <div className="flex items-center space-x-1 border border-slate-200 rounded-lg px-3 py-1.5 bg-slate-50 text-slate-600 cursor-pointer">
              <span>All</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </div>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="pl-8 pr-3 py-1.5 border border-slate-200 rounded-lg text-xs w-52 focus:outline-none focus:border-cyan-500"
            />
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
          </div>
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-12 px-6 py-3 bg-slate-50/80 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wider">
          <div className="col-span-1"></div>
          <div className="col-span-3 text-center">Name</div>
          <div className="col-span-2 text-center">Type</div>
          <div className="col-span-3 text-center">Start Time</div>
          <div className="col-span-2 text-center">Duration</div>
          <div className="col-span-1 text-center">Actions</div>
        </div>

        {/* Table Body Rows */}
        <div className="divide-y divide-slate-100 overflow-y-auto flex-1">
          {callsData.map((call) => (
            <div key={call.id} className="grid grid-cols-12 px-6 py-3.5 items-center hover:bg-slate-50/60 transition-colors text-xs text-slate-700">
              {/* Checkbox & Call Type Icon */}
              <div className="col-span-1 flex items-center space-x-3">
                <input type="checkbox" className="rounded border-slate-300 text-cyan-600 focus:ring-cyan-500" />
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${call.isVideo ? 'bg-emerald-500' : 'bg-sky-500'}`}>
                  {call.isVideo ? <Video className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                </div>
              </div>

              {/* Name */}
              <div className="col-span-3 text-center font-medium text-slate-800">{call.name}</div>

              {/* Type */}
              <div className="col-span-2 text-center text-slate-500">{call.type}</div>

              {/* Start Time */}
              <div className="col-span-3 text-center font-mono text-slate-600">{call.time}</div>

              {/* Duration */}
              <div className="col-span-2 text-center font-mono text-slate-600">{call.duration}</div>

              {/* Actions */}
              <div className="col-span-1 flex items-center justify-center space-x-2">
                <button className="w-6 h-6 rounded-full bg-cyan-500 text-white flex items-center justify-center hover:bg-cyan-600 transition-colors">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </button>
                <button className="w-6 h-6 rounded-full bg-sky-400 text-white flex items-center justify-center hover:bg-sky-500 transition-colors">
                  <Download className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
