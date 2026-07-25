import React, { useState } from 'react';
import { Trash2, Download, ChevronDown } from 'lucide-react';

export default function DashCams() {
  const [selectedItems, setSelectedItems] = useState([]);

  const groups = [
    {
      date: '2025-03-31',
      items: [
        { id: 1, time: '17:21:29', url: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=300&auto=format&fit=crop&q=80' },
        { id: 2, time: '17:11:29', url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=300&auto=format&fit=crop&q=80' },
        { id: 3, time: '16:35:29', url: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=300&auto=format&fit=crop&q=80' }
      ]
    },
    {
      date: '2025-03-30',
      items: [
        { id: 4, time: '23:28:28', url: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=300&auto=format&fit=crop&q=80' },
        { id: 5, time: '21:21:29', url: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=300&auto=format&fit=crop&q=80' }
      ]
    }
  ];

  const allIds = [1, 2, 3, 4, 5];

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedItems(allIds);
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
      {/* Top controls */}
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
          
          <button className="flex items-center space-x-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors">
            <span>All</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </button>
        </div>
      </div>

      {/* Grid list of videos grouped by Date */}
      <div className="space-y-8 flex-1 overflow-y-auto">
        {groups.map((group) => (
          <div key={group.date} className="space-y-4">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={group.items.every(item => selectedItems.includes(item.id))}
                onChange={(e) => {
                  const groupIds = group.items.map(item => item.id);
                  if (e.target.checked) {
                    setSelectedItems([...new Set([...selectedItems, ...groupIds])]);
                  } else {
                    setSelectedItems(selectedItems.filter(id => !groupIds.includes(id)));
                  }
                }}
                className="rounded-sm border-slate-300 text-cyan-600 focus:ring-cyan-500 w-4 h-4"
              />
              <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                {group.date}
              </span>
            </div>

            {/* Grid lists */}
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-6">
              {group.items.map((item) => (
                <div key={item.id} className="relative bg-slate-50 rounded-xl overflow-hidden border border-slate-200/80 shadow-xs flex flex-col">
                  <div className="aspect-square relative w-full overflow-hidden bg-slate-900 flex items-center justify-center">
                    <img
                      src={item.url}
                      alt="dashcam thumbnail"
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white border border-white/30">
                        <svg className="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="p-2.5 bg-slate-50 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={selectedItems.includes(item.id)}
                        onChange={() => handleSelectItem(item.id)}
                        className="rounded-sm border-slate-300 text-cyan-600 focus:ring-cyan-500 w-3.5 h-3.5"
                      />
                      <span className="text-[10px] font-mono text-slate-500">{item.time}</span>
                    </div>

                    <button className="p-1 bg-white hover:bg-cyan-500 hover:text-white rounded-md text-slate-500 border border-slate-200 transition-colors shadow-2xs">
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
