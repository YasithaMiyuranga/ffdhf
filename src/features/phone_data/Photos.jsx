import React from 'react';
import { Camera } from 'lucide-react';

export default function Photos() {
  const photoFolders = [
    { id: 1, name: 'friend', count: 12 },
    { id: 2, name: 'food', count: 8 }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xs border border-slate-200/80 p-8 min-h-[720px] flex flex-col space-y-6">
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <span className="text-xs font-bold text-slate-800">Photo Folders</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-8 pt-4">
        {photoFolders.map((folder) => (
          <div key={folder.id} className="flex flex-col items-center group cursor-pointer">
            <div className="w-24 h-20 bg-cyan-500 rounded-xl relative shadow-md group-hover:scale-105 transition-transform flex items-center justify-center">
              {/* Folder tab design */}
              <div className="absolute -top-1.5 left-2 w-8 h-2 bg-cyan-600 rounded-t-md" />
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white">
                <Camera className="w-5 h-5" />
              </div>
            </div>
            <span className="text-xs font-semibold text-slate-700 mt-3 group-hover:text-cyan-600 transition-colors">
              {folder.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
