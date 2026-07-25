import React, { useState } from 'react';
import { Trash2, Download } from 'lucide-react';

export default function VideoPreview() {
  const [selectedItems, setSelectedItems] = useState([]);

  const videos = [
    {
      id: 1,
      time: '08:38:43',
      thumb: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=300&auto=format&fit=crop&q=80',
    },
    {
      id: 2,
      time: '10:42:43',
      thumb: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=300&auto=format&fit=crop&q=80',
    },
    {
      id: 3,
      time: '10:58:01',
      thumb: 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=300&auto=format&fit=crop&q=80',
    }
  ];

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedItems(videos.map(v => v.id));
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
      {/* Top Action controls */}
      <div className="flex items-center space-x-4 border-b border-slate-100 pb-4">
        <label className="flex items-center space-x-2 text-xs font-semibold text-slate-700 cursor-pointer select-none">
          <input
            type="checkbox"
            onChange={handleSelectAll}
            checked={selectedItems.length === videos.length}
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

      {/* Date section */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={selectedItems.length === videos.length}
            onChange={handleSelectAll}
            className="rounded-sm border-slate-300 text-cyan-600 focus:ring-cyan-500 w-4 h-4"
          />
          <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
            2022-02-02
          </span>
        </div>

        {/* Video Card Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-6">
          {videos.map((vid) => (
            <div key={vid.id} className="relative bg-slate-50 rounded-xl overflow-hidden border border-slate-200/80 shadow-xs flex flex-col">
              <div className="aspect-square relative w-full overflow-hidden bg-slate-900">
                <img
                  src={vid.thumb}
                  alt="Video thumbnail"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom Card details */}
              <div className="p-2.5 bg-slate-50 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(vid.id)}
                    onChange={() => handleSelectItem(vid.id)}
                    className="rounded-sm border-slate-300 text-cyan-600 focus:ring-cyan-500 w-3.5 h-3.5"
                  />
                  <span className="text-[10px] font-mono text-slate-500">{vid.time}</span>
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
