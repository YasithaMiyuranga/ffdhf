import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardPage from './pages/DashboardPage';
import LogsPage from './pages/LogsPage';
import ScreenTimePage from './pages/ScreenTimePage';
import SocialAppsPage from './pages/social_networks/SocialAppsPage';
import AppCallsPage from './pages/social_networks/AppCallsPage';
import AppAudioPage from './pages/social_networks/AppAudioPage';

function MainLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [lastUpdated, setLastUpdated] = useState('2026-07-21 15:30:00');

  const getPageTitle = (pathname) => {
    if (pathname === '/logs') return 'Logs';
    if (pathname === '/screetime' || pathname === '/screentime') return 'Screen Time';
    if (pathname.includes('/social_apps')) return 'Social Apps';
    if (pathname.includes('/app_calls')) return 'App Calls';
    if (pathname.includes('/app_audio')) return 'App Audio';
    return 'Dashboard';
  };

  const handleSync = () => {
    const now = new Date();
    const formatted = now.toISOString().replace('T', ' ').substring(0, 19);
    setLastUpdated(formatted);
  };

  return (
    <div className="flex min-h-screen bg-slate-100 font-sans text-slate-800 antialiased">
      {/* Left Navigation Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Top Bar Header */}
        <Header title={getPageTitle(location.pathname)} lastUpdated={lastUpdated} onSync={handleSync} />

        {/* Dynamic Page Views */}
        <main className="p-6 flex-1 max-w-7xl w-full mx-auto">
          <Routes>
            <Route path="/" element={<DashboardPage onSelectCategory={(cat) => navigate(`/${cat}`)} />} />
            <Route path="/logs" element={<LogsPage />} />
            <Route path="/screetime" element={<ScreenTimePage />} />
            <Route path="/screentime" element={<ScreenTimePage />} />
            <Route path="/socialnetwork/social_apps" element={<SocialAppsPage />} />
            <Route path="/social_apps" element={<SocialAppsPage />} />
            <Route path="/socialnetwork/app_calls" element={<AppCallsPage />} />
            <Route path="/app_calls" element={<AppCallsPage />} />
            <Route path="/socialnetwork/app_audio" element={<AppAudioPage />} />
            <Route path="/app_audio" element={<AppAudioPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}
