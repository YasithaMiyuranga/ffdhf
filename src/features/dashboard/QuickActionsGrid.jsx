import React from 'react';
import {
  Phone,
  MessageSquare,
  Camera,
  Radio,
  Maximize2,
  FileText,
  Image,
  Video,
  Keyboard,
  Share2
} from 'lucide-react';

export default function QuickActionsGrid({ onSelectCategory }) {
  const actions = [
    { id: 'calls', label: 'Calls', count: 3, icon: Phone, color: 'bg-emerald-500', text: 'text-emerald-500' },
    { id: 'messages', label: 'Messages', count: 15, icon: MessageSquare, color: 'bg-sky-500', text: 'text-sky-500' },
    { id: 'whatsapp', label: 'WhatsApp', count: 7, icon: MessageSquare, color: 'bg-green-500', text: 'text-green-500' },
    { id: 'messenger', label: 'Messenger', count: 0, icon: MessageSquare, color: 'bg-blue-600', text: 'text-blue-600' },
    { id: 'instagram', label: 'Instagram', count: 0, icon: Share2, color: 'bg-pink-500', text: 'text-pink-500' },
    { id: 'facebook', label: 'Facebook', count: 0, icon: Share2, color: 'bg-blue-700', text: 'text-blue-700' },
    { id: 'telegram', label: 'Telegram', count: 0, icon: MessageSquare, color: 'bg-cyan-500', text: 'text-cyan-500' },
    { id: 'screenshots', label: 'Capture Screenshots', count: 0, icon: Maximize2, color: 'bg-indigo-500', text: 'text-indigo-500' },
    { id: 'livescreen', label: 'Live Screen', count: 0, icon: Video, color: 'bg-rose-500', text: 'text-rose-500' },
    { id: 'surround', label: 'Record Surround', count: 0, icon: Radio, color: 'bg-[#009bb3]', text: 'text-cyan-600' },
    { id: 'takephotos', label: 'Take Photos', count: 0, icon: Camera, color: 'bg-amber-500', text: 'text-amber-500' },
    { id: 'recordscreen', label: 'Record Screen', count: 0, icon: Video, color: 'bg-emerald-600', text: 'text-emerald-600' },
    { id: 'logs', label: 'Logs', count: 0, icon: FileText, color: 'bg-slate-600', text: 'text-slate-600' },
    { id: 'photos', label: 'Photos', count: 19, icon: Image, color: 'bg-orange-500', text: 'text-orange-500' },
    { id: 'videopreview', label: 'Video Preview', count: 0, icon: Video, color: 'bg-purple-600', text: 'text-purple-600' },
    { id: 'keylogger', label: 'Keylogger', count: 4, icon: Keyboard, color: 'bg-amber-600', text: 'text-amber-600' },
  ];

  return (
    <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200/80 mb-6">
      <h2 className="text-base font-bold text-slate-800 mb-4 flex items-center justify-between">
        <span>Quick Monitoring Dashboard</span>
        <span className="text-xs font-normal text-slate-400">Click any feature to inspect live data</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
        {actions.map((act) => {
          const IconComp = act.icon;
          return (
            <button
              key={act.id}
              onClick={() => onSelectCategory(act.id)}
              className="flex flex-col items-center justify-center p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all group relative"
            >
              <div className="relative">
                <div className={`w-11 h-11 rounded-2xl ${act.color} text-white flex items-center justify-center shadow-md shadow-slate-200 group-hover:scale-105 transition-transform`}>
                  <IconComp className="w-5 h-5" />
                </div>
                {act.count > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 px-1.5 py-0.5 text-[10px] font-extrabold bg-red-500 text-white rounded-full border-2 border-white shadow-xs">
                    {act.count}
                  </span>
                )}
              </div>
              <span className="mt-2 text-xs font-semibold text-slate-700 text-center leading-tight">
                {act.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
