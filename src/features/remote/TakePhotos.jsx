import React, { useState } from 'react';
import { Trash2, Download, ChevronDown } from 'lucide-react';

export default function TakePhotos() {
  const [selectedItems, setSelectedItems] = useState([]);

  const photoGroups = [
    {
      date: '2022-02-05',
      items: [
        { id: 1, time: '20:11:22', url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&auto=format&fit=crop&q=80' },
        { id: 2, time: '15:11:22', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80' }
      ]
    },
    {
      date: '2022-02-04',
      items: [
        { id: 3, time: '04:11:35', url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80' }
      ]
    }
  ];

  const allIds = [1, 2, 3];

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

        <div className="flex items-center space-x-3">
          <button className="px-4 py-2 bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-700 font-bold text-xs rounded-lg flex items-center space-x-1.5 transition-all shadow-3xs">
            <span>Auto-Shoot</span>
          </button>

          <button className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-bold text-xs rounded-lg flex items-center space-x-1.5 transition-all shadow-sm">
            <span>Shoot Now</span>
            <ChevronDown className="w-3.5 h-3.5 text-white/80" />
          </button>
        </div>
      </div>

      {/* Date groups & Grid lists */}
      <div className="space-y-8 flex-1 overflow-y-auto">
        {photoGroups.map((group) => (
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
                  <div className="aspect-square relative w-full overflow-hidden bg-slate-100">
                    <img
                      src={item.url}
                      alt="captured photo log"
                      className="w-full h-full object-cover"
                    />
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
