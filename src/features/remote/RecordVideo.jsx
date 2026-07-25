import React, { useState } from 'react';
import { Trash2, Download } from 'lucide-react';

export default function RecordVideo() {
  const [selectedItems, setSelectedItems] = useState([]);

  const videos = [
    {
      id: 1,
      date: '2022-05-18 10:20:11',
      duration: '0:15',
      url: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=300&auto=format&fit=crop&q=80'
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xs border border-slate-200/80 p-6 min-h-[720px] flex flex-col space-y-6">
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <div className="flex items-center space-x-4">
          <label className="flex items-center space-x-2 text-xs font-semibold text-slate-700 cursor-pointer select-none">
            <input
              type="checkbox"
              onChange={(e) => setSelectedItems(e.target.checked ? [1] : [])}
              checked={selectedItems.length === 1}
              className="rounded-sm border-slate-300 text-cyan-600 focus:ring-cyan-500 w-4 h-4"
            />
            <span>All Select</span>
          </label>
          <button className="p-1.5 rounded-lg border border-slate-150 text-slate-300 cursor-not-allowed">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>

        <button className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-bold text-xs rounded-lg flex items-center transition-all shadow-sm">
          <span>Shoot Now</span>
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-6">
        {videos.map((item) => (
          <div key={item.id} className="relative bg-slate-50 rounded-xl overflow-hidden border border-slate-200/80 shadow-xs flex flex-col">
            <div className="aspect-square relative w-full overflow-hidden bg-slate-900 flex items-center justify-center">
              <img src={item.url} alt="video thumbnail" className="w-full h-full object-cover opacity-80" />
            </div>

            <div className="p-2.5 bg-slate-50 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedItems.includes(item.id)}
                  onChange={() => setSelectedItems(selectedItems.includes(item.id) ? [] : [1])}
                  className="rounded-sm border-slate-300 text-cyan-600 focus:ring-cyan-500 w-3.5 h-3.5"
                />
                <span className="text-[10px] font-mono text-slate-500">{item.duration}</span>
              </div>

              <button className="p-1 bg-white hover:bg-cyan-500 hover:text-white rounded-md text-slate-500 border border-slate-200 transition-colors">
                <Download className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
