import React, { useState } from 'react';
import { Trash2, Download, Mic, Calendar } from 'lucide-react';

const WhatsAppBadge = () => (
  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xs border-2 border-white">
    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
    </svg>
  </div>
);

export default function AppAudio() {
  const [selectedCount, setSelectedCount] = useState(0);

  const audioGroups = [
    {
      date: '2024-06-03',
      audios: [
        { id: 1, time: '17:01:12', app: 'whatsapp' },
      ],
    },
    {
      date: '2024-06-02',
      audios: [
        { id: 2, time: '16:38:00', app: 'whatsapp' },
        { id: 3, time: '16:37:14', app: 'whatsapp' },
        { id: 4, time: '16:36:54', app: 'whatsapp' },
      ],
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xs border border-slate-200/80 p-6 min-h-[720px] flex flex-col space-y-6">
      {/* Top Control Bar */}
      <div className="flex items-center space-x-6 pb-4 border-b border-slate-200 text-xs font-medium text-slate-600">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input type="checkbox" className="rounded border-slate-300 text-cyan-600 focus:ring-cyan-500" />
          <span>Select {selectedCount}/20</span>
        </label>

        <button className="p-2 rounded-full bg-rose-50 text-rose-500 hover:bg-rose-100 transition-colors">
          <Trash2 className="w-4 h-4" />
        </button>

        <button className="p-2 rounded-full bg-cyan-50 text-cyan-600 hover:bg-cyan-100 transition-colors">
          <Download className="w-4 h-4" />
        </button>
      </div>

      {/* Audio Voice Recordings Grouped By Date */}
      <div className="space-y-8 flex-1">
        {audioGroups.map((group, gIdx) => (
          <div key={gIdx} className="space-y-4">
            {/* Date Header */}
            <div className="flex items-center space-x-2 text-xs font-semibold text-slate-600 pb-2 border-b border-slate-100">
              <Calendar className="w-4 h-4 text-slate-400" />
              <span>{group.date}</span>
            </div>

            {/* Audio Cards Grid */}
            <div className="flex flex-wrap gap-6 pt-2">
              {group.audios.map((item) => (
                <div
                  key={item.id}
                  className="w-48 bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 flex flex-col items-center shadow-2xs hover:shadow-md transition-all group"
                >
                  {/* Glowing Gradient Ring with Mic Icon */}
                  <div className="relative my-3">
                    <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-purple-500 via-pink-400 to-amber-400 flex items-center justify-center shadow-xs">
                      <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                        <Mic className="w-8 h-8 text-slate-700 group-hover:scale-110 transition-transform" />
                      </div>
                    </div>
                    {item.app === 'whatsapp' && <WhatsAppBadge />}
                  </div>

                  {/* Card Bottom Bar (Checkbox, Timestamp & Download) */}
                  <div className="w-full flex items-center justify-between pt-3 border-t border-slate-200/60 text-[11px] text-slate-500 font-mono">
                    <input type="checkbox" className="rounded border-slate-300 text-cyan-600 focus:ring-cyan-500" />
                    <span>{item.time}</span>
                    <button className="text-slate-400 hover:text-cyan-600 transition-colors">
                      <Download className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
