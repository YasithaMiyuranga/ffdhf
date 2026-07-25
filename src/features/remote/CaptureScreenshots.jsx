import React, { useState } from 'react';
import { Trash2, Download } from 'lucide-react';

export default function CaptureScreenshots() {
  const [selectedItems, setSelectedItems] = useState([]);

  const screenshotGroups = [
    {
      date: '2022-02-27',
      items: [
        { id: 1, time: '08:57:12', url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&auto=format&fit=crop&q=80' },
        { id: 2, time: '08:45:14', url: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=300&auto=format&fit=crop&q=80' }
      ]
    },
    {
      date: '2022-02-25',
      items: [
        { id: 3, time: '08:57:11', url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&auto=format&fit=crop&q=80' }
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
            <span>Auto-Screenshot</span>
          </button>

          <button className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-bold text-xs rounded-lg flex items-center space-x-1.5 transition-all shadow-sm">
            <span>Take Screenshots</span>
          </button>
        </div>
      </div>

      {/* Date groups & Grid lists */}
      <div className="space-y-8 flex-1 overflow-y-auto">
        {screenshotGroups.map((group) => (
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
                      alt="screenshot log"
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
