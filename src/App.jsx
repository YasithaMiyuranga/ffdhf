import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardPage from './pages/DashboardPage';

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
        <Header lastUpdated={lastUpdated} onSync={handleSync} />

        {/* Dashboard Main View */}
        <main className="p-6 flex-1 max-w-7xl w-full mx-auto">
          <DashboardPage onSelectCategory={(cat) => setActiveTab(cat)} />
        </main>
      </div>
    </div>
  );
}
