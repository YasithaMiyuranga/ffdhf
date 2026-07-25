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
import YouTubePage from './pages/video_app/YouTubePage';
import TikTokPage from './pages/video_app/TikTokPage';
import ReelShortPage from './pages/video_app/ReelShortPage';
import OnlyFansPage from './pages/video_app/OnlyFansPage';
import CallsPage from './pages/phone_data/CallsPage';
import CallsRecordingPage from './pages/phone_data/CallsRecordingPage';
import MessagesPage from './pages/phone_data/MessagesPage';
import PhotosPage from './pages/phone_data/PhotosPage';
import BrowserHistoryPage from './pages/phone_data/BrowserHistoryPage';
import KeyloggerPage from './pages/phone_data/KeyloggerPage';
import TrackKeywordsPage from './pages/phone_data/TrackKeywordsPage';
import WiFiLoggerPage from './pages/phone_data/WiFiLoggerPage';
import AppManagementPage from './pages/phone_data/AppManagementPage';
import ContactsPage from './pages/phone_data/ContactsPage';
import VideoPreviewPage from './pages/phone_data/VideoPreviewPage';
import CalendarPage from './pages/phone_data/CalendarPage';

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
    if (pathname.includes('/youtube')) return 'YouTube';
    if (pathname.includes('/tiktok')) return 'TikTok';
    if (pathname.includes('/reelshort')) return 'ReelShort';
    if (pathname.includes('/onlyfans')) return 'OnlyFans';
    if (pathname.includes('/calls_recording')) return 'Calls Recording';
    if (pathname.includes('/calls')) return 'Calls';
    if (pathname.includes('/messages')) return 'Messages';
    if (pathname.includes('/photos')) return 'Photos';
    if (pathname.includes('/browser_history')) return 'Browser History';
    if (pathname.includes('/keylogger')) return 'Keylogger';
    if (pathname.includes('/track_keywords')) return 'Track Keywords';
    if (pathname.includes('/wifi_logger')) return 'Wi-Fi Logger';
    if (pathname.includes('/app_management')) return 'App Management';
    if (pathname.includes('/video_preview')) return 'Video Preview';
    if (pathname.includes('/contacts')) return 'Contacts';
    if (pathname.includes('/calendar')) return 'Calendar';
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
            <Route path="/video_app/youtube" element={<YouTubePage />} />
            <Route path="/youtube" element={<YouTubePage />} />
            <Route path="/video_app/tiktok" element={<TikTokPage />} />
            <Route path="/tiktok" element={<TikTokPage />} />
            <Route path="/video_app/reelshort" element={<ReelShortPage />} />
            <Route path="/reelshort" element={<ReelShortPage />} />
            <Route path="/video_app/onlyfans" element={<OnlyFansPage />} />
            <Route path="/onlyfans" element={<OnlyFansPage />} />
            <Route path="/phonedata/calls" element={<CallsPage />} />
            <Route path="/calls" element={<CallsPage />} />
            <Route path="/phonedata/calls_recording" element={<CallsRecordingPage />} />
            <Route path="/calls_recording" element={<CallsRecordingPage />} />
            <Route path="/phonedata/messages" element={<MessagesPage />} />
            <Route path="/messages" element={<MessagesPage />} />
            <Route path="/phonedata/photos" element={<PhotosPage />} />
            <Route path="/photos" element={<PhotosPage />} />
            <Route path="/phonedata/browser_history" element={<BrowserHistoryPage />} />
            <Route path="/browser_history" element={<BrowserHistoryPage />} />
            <Route path="/phonedata/keylogger" element={<KeyloggerPage />} />
            <Route path="/keylogger" element={<KeyloggerPage />} />
            <Route path="/phonedata/track_keywords" element={<TrackKeywordsPage />} />
            <Route path="/track_keywords" element={<TrackKeywordsPage />} />
            <Route path="/phonedata/wifi_logger" element={<WiFiLoggerPage />} />
            <Route path="/wifi_logger" element={<WiFiLoggerPage />} />
            <Route path="/phonedata/app_management" element={<AppManagementPage />} />
            <Route path="/app_management" element={<AppManagementPage />} />
            <Route path="/phonedata/video_preview" element={<VideoPreviewPage />} />
            <Route path="/video_preview" element={<VideoPreviewPage />} />
            <Route path="/phonedata/contacts" element={<ContactsPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/phonedata/calendar" element={<CalendarPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
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
