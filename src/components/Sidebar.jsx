import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Smartphone,
  PlusCircle,
  LayoutDashboard,
  FileText,
  Clock,
  Share2,
  Video,
  PhoneCall,
  Mic,
  MessageSquare,
  Image,
  Globe,
  Keyboard,
  Search,
  Wifi,
  Grid,
  Users,
  Calendar,
  Radio,
  Camera,
  Maximize2,
  MapPin,
  Shield,
  ChevronDown,
  ChevronRight,
  Flame,
  BatteryCharging
} from 'lucide-react';

// Custom SVG Logos for Video Apps Sidebar
const YouTubeSidebarIcon = () => (
  <div className="w-4 h-4 rounded-xs border border-cyan-400 text-cyan-400 flex items-center justify-center shrink-0">
    <svg className="w-2.5 h-2.5 fill-current ml-0.5" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z"/>
    </svg>
  </div>
);

const TikTokSidebarIcon = () => (
  <div className="w-4 h-4 rounded-xs border border-slate-300 text-white flex items-center justify-center shrink-0">
    <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 1 0 5.55 6.29V9.41a8.27 8.27 0 0 0 4.77 1.52V7.47a4.85 4.85 0 0 1-1.0-.78z"/>
    </svg>
  </div>
);

const ReelShortSidebarIcon = () => (
  <div className="w-4 h-4 rounded-xs border border-slate-300 text-white font-bold text-[9px] flex items-center justify-center shrink-0">
    R
  </div>
);

const OnlyFansSidebarIcon = () => (
  <div className="w-4 h-4 text-cyan-400 flex items-center justify-center shrink-0">
    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 18c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z"/>
    </svg>
  </div>
);

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const [openSections, setOpenSections] = useState({
    social: true,
    video: true,
    phoneData: true,
    remoteControl: true,
    location: true,
    more: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <aside className="w-72 bg-[#091b2c] text-slate-300 flex flex-col h-screen sticky top-0 overflow-y-auto select-none border-r border-slate-800 font-sans shadow-2xl shrink-0">
      {/* Device Header */}
      <div className="p-4 bg-[#009bb3] text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-white/10 rounded-xl backdrop-blur-sm">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-sm leading-tight">John's Galaxy S24</h3>
              <div className="flex items-center space-x-2 text-xs text-cyan-100 mt-1">
                <span className="flex items-center space-x-1">
                  <BatteryCharging className="w-3.5 h-3.5" />
                  <span>20%</span>
                </span>
                <span>•</span>
                <Wifi className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </div>

        <button className="mt-3 w-full py-2 px-3 bg-[#007b8f] hover:bg-[#00697a] text-white font-medium text-xs rounded-full flex items-center justify-center space-x-2 shadow-sm transition-all border border-cyan-300/20">
          <PlusCircle className="w-4 h-4" />
          <span>Add A New Device</span>
        </button>
      </div>

      {/* Navigation List */}
      <nav className="p-3 space-y-1 text-sm font-medium flex-1">
        {/* Dashboard */}
        <button
          onClick={() => navigate('/')}
          className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl transition-all ${
            currentPath === '/'
              ? 'bg-[#009bb3] text-white shadow-lg'
              : 'hover:bg-slate-800/60 text-slate-300'
          }`}
        >
          <LayoutDashboard className="w-5 h-5 text-cyan-400" />
          <span>Dashboard</span>
        </button>

        {/* Logs */}
        <button
          onClick={() => navigate('/logs')}
          className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all ${
            currentPath === '/logs'
              ? 'bg-[#009bb3] text-white shadow-lg'
              : 'hover:bg-slate-800/60 text-slate-300'
          }`}
        >
          <div className="flex items-center space-x-3">
            <FileText className="w-5 h-5 text-cyan-400" />
            <span>Logs</span>
          </div>
          <span className="px-1.5 py-0.5 text-[10px] font-bold bg-red-500 text-white rounded-md flex items-center gap-0.5 uppercase tracking-wider">
            <Flame className="w-3 h-3 fill-current" /> HOT
          </span>
        </button>

        {/* Screen Time */}
        <button
          onClick={() => navigate('/screetime')}
          className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl transition-all ${
            currentPath === '/screetime' || currentPath === '/screentime'
              ? 'bg-[#009bb3] text-white shadow-lg'
              : 'hover:bg-slate-800/60 text-slate-300'
          }`}
        >
          <Clock className="w-5 h-5 text-cyan-400" />
          <span>Screen Time</span>
        </button>

        {/* Social Networks Accordion */}
        <div>
          <button
            onClick={() => toggleSection('social')}
            className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-slate-800/60 text-slate-300 transition-all"
          >
            <div className="flex items-center space-x-3">
              <Share2 className="w-5 h-5 text-cyan-400" />
              <span>Social Networks</span>
            </div>
            {openSections.social ? <ChevronDown className="w-4 h-4 text-cyan-400" /> : <ChevronRight className="w-4 h-4 text-slate-500" />}
          </button>

          {openSections.social && (
            <div className="ml-8 mt-1 space-y-1 pl-2 border-l border-slate-800 text-xs">
              <button
                onClick={() => navigate('/socialnetwork/social_apps')}
                className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg transition-all ${
                  currentPath.includes('/social_apps')
                    ? 'bg-[#009bb3] text-white font-bold'
                    : 'hover:bg-slate-800/40 text-slate-300'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <MessageSquare className="w-4 h-4 text-cyan-400" />
                  <span>Social Apps</span>
                </div>
                <span className="px-1 py-0.2 text-[9px] bg-red-500 text-white rounded font-bold">HOT</span>
              </button>

              <button
                onClick={() => navigate('/socialnetwork/app_calls')}
                className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg transition-all ${
                  currentPath.includes('/app_calls')
                    ? 'bg-[#009bb3] text-white font-bold'
                    : 'hover:bg-slate-800/40 text-slate-300'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <PhoneCall className="w-4 h-4 text-cyan-400" />
                  <span>App Calls</span>
                </div>
                <span className="px-1 py-0.2 text-[9px] bg-red-500 text-white rounded font-bold">HOT</span>
              </button>

              <button
                onClick={() => navigate('/socialnetwork/app_audio')}
                className={`w-full flex items-center space-x-2 px-2.5 py-2 rounded-lg transition-all ${
                  currentPath.includes('/app_audio')
                    ? 'bg-[#009bb3] text-white font-bold'
                    : 'hover:bg-slate-800/40 text-slate-300'
                }`}
              >
                <Mic className="w-4 h-4 text-cyan-400" />
                <span>App Audio</span>
              </button>
            </div>
          )}
        </div>

        {/* Video Apps Accordion */}
        <div>
          <button
            onClick={() => toggleSection('video')}
            className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-slate-800/60 text-slate-300 transition-all"
          >
            <div className="flex items-center space-x-3">
              <Video className="w-5 h-5 text-cyan-400" />
              <span>Video Apps</span>
            </div>
            {openSections.video ? <ChevronDown className="w-4 h-4 text-cyan-400" /> : <ChevronRight className="w-4 h-4 text-slate-500" />}
          </button>

          {openSections.video && (
            <div className="ml-8 mt-1 space-y-1 pl-2 border-l border-slate-800 text-xs">
              <button
                onClick={() => navigate('/video_app/youtube')}
                className={`w-full flex items-center space-x-2 px-2.5 py-1.5 rounded-lg transition-all ${
                  currentPath.includes('/youtube')
                    ? 'bg-[#009bb3] text-white font-bold'
                    : 'hover:bg-slate-800/40 text-slate-300'
                }`}
              >
                <YouTubeSidebarIcon />
                <span>YouTube</span>
              </button>

              <button
                onClick={() => navigate('/video_app/tiktok')}
                className={`w-full flex items-center space-x-2 px-2.5 py-1.5 rounded-lg transition-all ${
                  currentPath.includes('/tiktok')
                    ? 'bg-[#009bb3] text-white font-bold'
                    : 'hover:bg-slate-800/40 text-slate-300'
                }`}
              >
                <TikTokSidebarIcon />
                <span>TikTok</span>
              </button>

              <button
                onClick={() => navigate('/video_app/reelshort')}
                className={`w-full flex items-center space-x-2 px-2.5 py-1.5 rounded-lg transition-all ${
                  currentPath.includes('/reelshort')
                    ? 'bg-[#009bb3] text-white font-bold'
                    : 'hover:bg-slate-800/40 text-slate-300'
                }`}
              >
                <ReelShortSidebarIcon />
                <span>ReelShort</span>
              </button>

              <button
                onClick={() => navigate('/video_app/onlyfans')}
                className={`w-full flex items-center space-x-2 px-2.5 py-1.5 rounded-lg transition-all ${
                  currentPath.includes('/onlyfans')
                    ? 'bg-[#009bb3] text-white font-bold'
                    : 'hover:bg-slate-800/40 text-slate-300'
                }`}
              >
                <OnlyFansSidebarIcon />
                <span>OnlyFans</span>
              </button>
            </div>
          )}
        </div>

        {/* Phone Data Accordion */}
        <div>
          <button
            onClick={() => toggleSection('phoneData')}
            className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-slate-800/60 text-slate-300 transition-all"
          >
            <div className="flex items-center space-x-3">
              <Smartphone className="w-5 h-5 text-cyan-400" />
              <span>Phone Data</span>
            </div>
            {openSections.phoneData ? <ChevronDown className="w-4 h-4 text-cyan-400" /> : <ChevronRight className="w-4 h-4 text-slate-500" />}
          </button>

          {openSections.phoneData && (
            <div className="ml-8 mt-1 space-y-1 pl-2 border-l border-slate-800 text-xs">
              <button onClick={() => navigate('/calls')} className="w-full flex items-center space-x-2 px-2.5 py-1.5 rounded-lg hover:bg-slate-800/40 text-slate-300">
                <PhoneCall className="w-3.5 h-3.5 text-cyan-400" />
                <span>Calls</span>
              </button>
              <button onClick={() => navigate('/messages')} className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg hover:bg-slate-800/40 text-slate-300">
                <div className="flex items-center space-x-2">
                  <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Messages</span>
                </div>
                <span className="px-1 py-0.2 text-[9px] bg-red-500 text-white rounded font-bold">HOT</span>
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Footer Banner */}
      <div className="p-3 m-3 bg-slate-800/80 rounded-xl border border-slate-700/50 text-xs">
        <p className="font-semibold text-slate-200">Easier Monitoring</p>
        <p className="text-slate-400 text-[11px] mt-0.5">With Parental Control Mobile App</p>
      </div>
    </aside>
  );
}
