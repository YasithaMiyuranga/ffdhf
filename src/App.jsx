import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardPage from './pages/DashboardPage';
import LogsPage from './pages/LogsPage';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [lastUpdated, setLastUpdated] = useState('2026-07-21 15:30:00');

  const handleSync = () => {
    const now = new Date();
    const formatted = now.toISOString().replace('T', ' ').substring(0, 19);
    setLastUpdated(formatted);
  };

  return (
    <div className="flex min-h-screen bg-slate-100 font-sans text-slate-800 antialiased">
      {/* Left Navigation Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Top Bar Header */}
        <Header title={activeTab} lastUpdated={lastUpdated} onSync={handleSync} />

        {/* Dynamic Page Views */}
        <main className="p-6 flex-1 max-w-7xl w-full mx-auto">
          {activeTab === 'dashboard' && (
            <DashboardPage onSelectCategory={(cat) => setActiveTab(cat)} />
          )}
          {activeTab === 'logs' && <LogsPage />}
        </main>
      </div>
    </div>
  );
}
