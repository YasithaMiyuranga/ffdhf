import React from 'react';
import { ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';

export default function PermissionsCheck() {
  const permissions = [
    { name: 'Accessibility Service', status: 'Active', desc: 'Allows background system events log' },
    { name: 'Location Access', status: 'Active', desc: 'Allows precise background location log' },
    { name: 'Screen Capture Permission', status: 'Active', desc: 'Allows background screen monitoring' },
    { name: 'Notification Listener', status: 'Active', desc: 'Allows chat messages alerts log' },
    { name: 'Camera & Mic Access', status: 'Warning', desc: 'Required for real-time surroundings and camera take photos' }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xs border border-slate-200/80 p-6 min-h-[720px] flex flex-col space-y-6">
      <div className="flex items-center space-x-3 border-b border-slate-100 pb-4">
        <ShieldCheck className="w-5 h-5 text-cyan-500" />
        <h2 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Device Permissions Check</h2>
      </div>

      <div className="divide-y divide-slate-100 flex-1 overflow-y-auto">
        {permissions.map((perm, idx) => (
          <div key={idx} className="py-4 flex items-center justify-between hover:bg-slate-50/40 px-2 rounded-lg transition-colors">
            <div className="space-y-1">
              <p className="text-xs font-bold text-slate-800">{perm.name}</p>
              <p className="text-[10px] text-slate-400">{perm.desc}</p>
            </div>

            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center space-x-1 ${
              perm.status === 'Active'
                ? 'bg-green-50 text-green-600'
                : 'bg-amber-50 text-amber-600'
            }`}>
              {perm.status === 'Active' ? <CheckCircle2 className="w-3 h-3" /> : <AlertCircle className="w-3 h-3" />}
              <span>{perm.status}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
