import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';

const SnapchatLogo = () => (
  <div className="w-8 h-8 rounded-lg bg-yellow-400 flex items-center justify-center text-white shrink-0">
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M12 2c-3.8 0-7 2.2-7 6 0 1.7.6 3.1 1.7 4.2C5 12.8 4 14.2 4 16c0 2.2 2.2 4 5 4a6.6 6.6 0 0 0 3-.7c.9.5 2 .7 3 .7 2.8 0 5-1.8 5-4 0-1.8-1-3.2-2.7-3.8 1.1-1.1 1.7-2.5 1.7-4.2 0-3.8-3.2-6-7-6z"/>
    </svg>
  </div>
);

const FacebookLogo = () => (
  <div className="w-8 h-8 rounded-lg bg-blue-700 flex items-center justify-center text-white shrink-0">
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M9 8H7v3h2v9h4v-9h3.6l.4-3H13V6c0-.5.5-1 1-1h3V1H13c-3 0-5 2-5 5v2z"/>
    </svg>
  </div>
);

const MessengerLogo = () => (
  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-white shrink-0">
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M12 2C6.5 2 2 6.1 2 11.2c0 2.9 1.4 5.5 3.8 7.2v3.8l3.6-2c.8.2 1.7.3 2.6.3 5.5 0 10-4.1 10-9.2S17.5 2 12 2zm1 12.3l-2.6-2.8L5.3 15l5.6-6 2.6 2.8 5.1-3.5-5.6 6z"/>
    </svg>
  </div>
);

const PlayStoreLogo = () => (
  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200">
    <svg className="w-5 h-5" viewBox="0 0 24 24">
      <path d="M3 22l15-10L3 2z" fill="#00e676" />
      <path d="M3 2v20l5-5z" fill="#00b0ff" />
      <path d="M18 12L3 2l5 5z" fill="#ff3d00" />
      <path d="M18 12L8 17l10-5z" fill="#ffea00" />
    </svg>
  </div>
);

const AnyConnectLogo = () => (
  <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center text-white shrink-0">
    <span className="font-bold text-xs">AC</span>
  </div>
);

const ForestLogo = () => (
  <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white shrink-0">
    <span className="font-bold text-xs">🌲</span>
  </div>
);

const FakeGPSLogo = () => (
  <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center text-white shrink-0">
    <span className="font-bold text-xs">📍</span>
  </div>
);

const KidsGuardLogo = () => (
  <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center text-white shrink-0">
    <span className="font-bold text-xs">KG</span>
  </div>
);

export default function AppManagement() {
  const [activeTab, setActiveTab] = useState('installed');
  const [searchQuery, setSearchQuery] = useState('');

  const appsList = [
    {
      id: 1,
      name: 'KidsGuard Pro App',
      installedDate: '2023-08-29 12:28:14',
      lastUsed: '2023-08-29 21:18:05',
      version: 'V1.7.0',
      size: '13.69MB',
      hasDot: true,
      icon: <KidsGuardLogo />
    },
    {
      id: 2,
      name: 'Snapchat',
      installedDate: '2022-01-25 21:13:43',
      lastUsed: '2023-08-23 15:02:23',
      version: '10.58.0',
      size: '56.38MB',
      hasDot: false,
      icon: <SnapchatLogo />
    },
    {
      id: 3,
      name: 'AnyConnect',
      installedDate: '2022-01-25 18:30:46',
      lastUsed: '2023-08-22 18:25:25',
      version: '6.5.1',
      size: '15.02MB',
      hasDot: false,
      icon: <AnyConnectLogo />
    },
    {
      id: 4,
      name: 'Google Play Store',
      installedDate: '2022-01-25 20:50:27',
      lastUsed: '2023-08-21 17:44:54',
      version: '14.7.5',
      size: '23.21MB',
      hasDot: false,
      icon: <PlayStoreLogo />
    },
    {
      id: 5,
      name: 'Forest',
      installedDate: '2022-01-25 19:04:35',
      lastUsed: '2023-08-20 23:09:24',
      version: '5.8.6',
      size: '25.60MB',
      hasDot: false,
      icon: <ForestLogo />
    },
    {
      id: 6,
      name: 'Messenger',
      installedDate: '2022-01-25 21:04:23',
      lastUsed: '2023-08-19 15:02:01',
      version: '12.0.0',
      size: '40.76MB',
      hasDot: false,
      icon: <MessengerLogo />
    },
    {
      id: 7,
      name: 'Fake GPS',
      installedDate: '2022-01-26 11:24:55',
      lastUsed: '2023-08-18 09:13:39',
      version: '4.7.15',
      size: '3.30MB',
      hasDot: false,
      icon: <FakeGPSLogo />
    },
    {
      id: 8,
      name: 'Facebook',
      installedDate: '2022-01-25 20:47:27',
      lastUsed: '2023-08-17 01:59:14',
      version: '10.5.6',
      size: '84.01MB',
      hasDot: false,
      icon: <FacebookLogo />
    }
  ];

  const filteredApps = appsList.filter(app => {
    return app.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="bg-white rounded-2xl shadow-xs border border-slate-200/80 p-6 min-h-[720px] flex flex-col space-y-6">
      {/* Top Tab Switcher */}
      <div className="flex items-center justify-center border-b border-slate-200">
        <div className="flex space-x-8 text-xs font-bold">
          <button
            onClick={() => setActiveTab('installed')}
            className={`pb-3 flex items-center space-x-2 transition-all ${
              activeTab === 'installed'
                ? 'border-b-2 border-cyan-500 text-cyan-600'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <span>Installed Apps</span>
          </button>
          <button
            onClick={() => setActiveTab('uninstalled')}
            className={`pb-3 flex items-center space-x-2 transition-all ${
              activeTab === 'uninstalled'
                ? 'border-b-2 border-cyan-500 text-cyan-600'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <span>Uninstalled Apps</span>
          </button>
          <button
            onClick={() => setActiveTab('limit')}
            className={`pb-3 flex items-center space-x-2 transition-all relative ${
              activeTab === 'limit'
                ? 'border-b-2 border-cyan-500 text-cyan-600'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <span>App Limit</span>
            <span className="absolute top-0.5 -right-2.5 w-1.5 h-1.5 bg-red-500 rounded-full" />
          </button>
        </div>
      </div>

      {/* Top Filter and Search Bar */}
      <div className="flex justify-end">
        <div className="relative max-w-xs w-full">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-xs focus:outline-hidden focus:border-cyan-500 bg-slate-50/50"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
        </div>
      </div>

      {/* Apps Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-slate-50/50">
              <th className="py-3 px-4">App Name</th>
              <th className="py-3 px-4">Installed Date</th>
              <th className="py-3 px-4">Last used</th>
              <th className="py-3 px-4">Version</th>
              <th className="py-3 px-4">Size</th>
              <th className="py-3 px-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
            {filteredApps.map((app) => (
              <tr key={app.id} className="hover:bg-slate-50/60 transition-colors">
                <td className="py-3 px-4">
                  <div className="flex items-center space-x-3">
                    {app.icon}
                    <span className="font-semibold text-slate-800">{app.name}</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 font-mono text-slate-500">{app.installedDate}</td>
                <td className="py-3.5 px-4 font-mono text-slate-500">{app.lastUsed}</td>
                <td className="py-3.5 px-4 font-mono text-slate-600">{app.version}</td>
                <td className="py-3.5 px-4 font-mono text-slate-500">{app.size}</td>
                <td className="py-3.5 px-4 text-right">
                  <button className="text-cyan-500 hover:text-cyan-700 font-bold transition-all relative">
                    Uninstall
                    {app.hasDot && (
                      <span className="absolute -top-0.5 -right-2 w-1.5 h-1.5 bg-red-500 rounded-full" />
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
