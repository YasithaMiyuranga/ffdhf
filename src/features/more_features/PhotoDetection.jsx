import React, { useState } from 'react';
import { Trash2, Download, AlertTriangle, ShieldAlert } from 'lucide-react';

export default function PhotoDetection() {
  const [selectedItems, setSelectedItems] = useState([]);

  const detectedPhotos = [
    {
      id: 1,
      time: '20:29:48',
      url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&auto=format&fit=crop&q=80',
      badges: ['18+']
    },
    {
      id: 2,
      time: '20:28:53',
      url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&auto=format&fit=crop&q=80',
      badges: ['18+', '☠️']
    },
    {
      id: 3,
      time: '15:52:38',
      url: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&auto=format&fit=crop&q=80',
      badges: ['18+', '🔪']
    },
    {
      id: 4,
      time: '15:45:35',
      url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80',
      badges: ['🔪']
    },
    {
      id: 5,
      time: '13:58:17',
      url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80',
      badges: ['🔪', '☠️']
    }
  ];

  const allIds = [1, 2, 3, 4, 5];

  const handleSelectAll = (e) => {
    setSelectedItems(e.target.checked ? allIds : []);
  };

  const handleSelectItem = (id) => {
    setSelectedItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-xs border border-slate-200/80 p-6 min-h-[720px] flex flex-col space-y-6">
      {/* Action Header controls */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-100 pb-4">
        <div className="flex items-center space-x-4">
          <label className="flex items-center space-x-2 text-xs font-semibold text-slate-700 cursor-pointer select-none">
            <input
              type="checkbox"
              onChange={handleSelectAll}
              checked={selectedItems.length === allIds.length}
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
        </div>
      </div>

      {/* Photos grouped by Date */}
      <div className="space-y-4 flex-1 overflow-y-auto">
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={selectedItems.length === allIds.length}
            onChange={handleSelectAll}
            className="rounded-sm border-slate-300 text-cyan-600 focus:ring-cyan-500 w-4 h-4"
          />
          <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
            2024-12-19
          </span>
        </div>

        {/* Video Card Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-6">
          {detectedPhotos.map((photo) => (
            <div key={photo.id} className="relative bg-slate-50 rounded-xl overflow-hidden border border-slate-200/80 shadow-xs flex flex-col">
              <div className="aspect-square relative w-full overflow-hidden bg-slate-900 flex items-center justify-center">
                <img
                  src={photo.url}
                  alt="detected capture"
                  className="w-full h-full object-cover"
                />
                
                {/* Badges container overlay top-right */}
                <div className="absolute top-2 right-2 flex flex-col space-y-1 items-end">
                  {photo.badges.map((badge, idx) => (
                    <span
                      key={idx}
                      className="bg-red-600/90 text-white text-[9px] font-extrabold px-1.5 py-0.5 rounded-md shadow-sm border border-red-500/30 flex items-center space-x-0.5"
                    >
                      {badge === '18+' ? <ShieldAlert className="w-2.5 h-2.5 inline" /> : null}
                      <span>{badge}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Details row */}
              <div className="p-2.5 bg-slate-50 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(photo.id)}
                    onChange={() => handleSelectItem(photo.id)}
                    className="rounded-sm border-slate-300 text-cyan-600 focus:ring-cyan-500 w-3.5 h-3.5"
                  />
                  <span className="text-[10px] font-mono text-slate-500">{photo.time}</span>
                </div>

                <button className="p-1 bg-white hover:bg-cyan-500 hover:text-white rounded-md text-slate-500 border border-slate-200 transition-colors shadow-2xs">
                  <Download className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
