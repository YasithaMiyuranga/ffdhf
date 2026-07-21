import React, { useState } from 'react';
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
  Eye,
  Users,
  Calendar,
  Radio,
  Camera,
  Maximize2,
  VideoOff,
  MapPin,
  Car,
  Shield,
  Mail,
  Zap,
  Download,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Flame,
  BatteryCharging
} from 'lucide-react';

export default function Sidebar({ activeTab, setActiveTab }) {
  // Toggle states for expandable accordion sections
  const [openSections, setOpenSections] = useState({
    social: true,
    video: false,
    phoneData: true,
    remoteControl: false,
    location: false,
    more: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <aside className="w-72 bg-[#091b2c] text-slate-300 flex flex-col h-screen sticky top-0 overflow-y-auto select-none border-r border-slate-800 font-sans shadow-2xl">
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
          <button className="p-1.5 hover:bg-white/10 rounded-lg transition-colors">
            <Smartphone className="w-4 h-4" />
          </button>
        </div>

        {/* Add Device Button */}
        <button className="mt-3 w-full py-2 px-3 bg-[#007b8f] hover:bg-[#00697a] text-white font-medium text-xs rounded-full flex items-center justify-center space-x-2 shadow-sm transition-all border border-cyan-300/20">
          <PlusCircle className="w-4 h-4" />
          <span>Add A New Device</span>
        </button>
      </div>

      {/* Navigation List */}
      <nav className="p-3 space-y-1 text-sm font-medium flex-1">
        {/* Dashboard */}
        <button
          onClick={() => setActiveTab('dashboard')}
          className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl transition-all ${
            activeTab === 'dashboard'
              ? 'bg-[#009bb3] text-white shadow-lg shadow-cyan-900/30'
              : 'hover:bg-slate-800/60 text-slate-300'
          }`}
        >
          <LayoutDashboard className="w-5 h-5 text-cyan-400" />
          <span>Dashboard</span>
        </button>

        {/* Logs */}
        <button
          onClick={() => setActiveTab('logs')}
          className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all ${
            activeTab === 'logs'
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
          onClick={() => setActiveTab('screentime')}
          className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl transition-all ${
            activeTab === 'screentime'
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
                onClick={() => setActiveTab('social_apps')}
                className="w-full flex items-center justify-between px-2.5 py-2 rounded-lg hover:bg-slate-800/40 text-slate-300"
              >
                <div className="flex items-center space-x-2">
                  <MessageSquare className="w-4 h-4 text-cyan-400" />
                  <span>Social Apps</span>
                </div>
                <span className="px-1 py-0.2 text-[9px] bg-red-500 text-white rounded font-bold">HOT</span>
              </button>
              <button
                onClick={() => setActiveTab('app_calls')}
                className="w-full flex items-center justify-between px-2.5 py-2 rounded-lg hover:bg-slate-800/40 text-slate-300"
              >
                <div className="flex items-center space-x-2">
                  <PhoneCall className="w-4 h-4 text-cyan-400" />
                  <span>App Calls</span>
                </div>
                <span className="px-1 py-0.2 text-[9px] bg-red-500 text-white rounded font-bold">HOT</span>
              </button>
              <button
                onClick={() => setActiveTab('app_audio')}
                className="w-full flex items-center space-x-2 px-2.5 py-2 rounded-lg hover:bg-slate-800/40 text-slate-300"
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
              {['YouTube', 'TikTok', 'ReelShort', 'OnlyFans'].map((app) => (
                <button
                  key={app}
                  onClick={() => setActiveTab(app.toLowerCase())}
                  className="w-full flex items-center space-x-2 px-2.5 py-2 rounded-lg hover:bg-slate-800/40 text-slate-300"
                >
                  <Video className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{app}</span>
                </button>
              ))}
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
              <button
                onClick={() => setActiveTab('calls')}
                className="w-full flex items-center space-x-2 px-2.5 py-1.5 rounded-lg hover:bg-slate-800/40 text-slate-300"
              >
                <PhoneCall className="w-3.5 h-3.5 text-cyan-400" />
                <span>Calls</span>
              </button>
              <button
                onClick={() => setActiveTab('calls_recording')}
                className="w-full flex items-center space-x-2 px-2.5 py-1.5 rounded-lg hover:bg-slate-800/40 text-slate-300"
              >
                <Mic className="w-3.5 h-3.5 text-cyan-400" />
                <span>Calls Recording</span>
              </button>
              <button
                onClick={() => setActiveTab('messages')}
                className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg hover:bg-slate-800/40 text-slate-300"
              >
                <div className="flex items-center space-x-2">
                  <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Messages</span>
                </div>
                <span className="px-1 py-0.2 text-[9px] bg-red-500 text-white rounded font-bold">HOT</span>
              </button>
              <button
                onClick={() => setActiveTab('photos')}
                className="w-full flex items-center space-x-2 px-2.5 py-1.5 rounded-lg hover:bg-slate-800/40 text-slate-300"
              >
                <Image className="w-3.5 h-3.5 text-cyan-400" />
                <span>Photos</span>
              </button>
              <button
                onClick={() => setActiveTab('browser_history')}
                className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg hover:bg-slate-800/40 text-slate-300"
              >
                <div className="flex items-center space-x-2">
                  <Globe className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Browser History</span>
                </div>
                <span className="px-1 py-0.2 text-[9px] bg-red-500 text-white rounded font-bold">HOT</span>
              </button>
              <button
                onClick={() => setActiveTab('keylogger')}
                className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg hover:bg-slate-800/40 text-slate-300"
              >
                <div className="flex items-center space-x-2">
                  <Keyboard className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Keylogger</span>
                </div>
                <span className="px-1 py-0.2 text-[9px] bg-red-500 text-white rounded font-bold">HOT</span>
              </button>
              <button
                onClick={() => setActiveTab('track_keywords')}
                className="w-full flex items-center space-x-2 px-2.5 py-1.5 rounded-lg hover:bg-slate-800/40 text-slate-300"
              >
                <Search className="w-3.5 h-3.5 text-cyan-400" />
                <span>Track Keywords</span>
              </button>
              <button
                onClick={() => setActiveTab('wifi_logger')}
                className="w-full flex items-center space-x-2 px-2.5 py-1.5 rounded-lg hover:bg-slate-800/40 text-slate-300"
              >
                <Wifi className="w-3.5 h-3.5 text-cyan-400" />
                <span>Wi-Fi Logger</span>
              </button>
              <button
                onClick={() => setActiveTab('app_management')}
                className="w-full flex items-center space-x-2 px-2.5 py-1.5 rounded-lg hover:bg-slate-800/40 text-slate-300"
              >
                <Grid className="w-3.5 h-3.5 text-cyan-400" />
                <span>App Management</span>
              </button>
              <button
                onClick={() => setActiveTab('contacts')}
                className="w-full flex items-center space-x-2 px-2.5 py-1.5 rounded-lg hover:bg-slate-800/40 text-slate-300"
              >
                <Users className="w-3.5 h-3.5 text-cyan-400" />
                <span>Contacts</span>
              </button>
              <button
                onClick={() => setActiveTab('calendar')}
                className="w-full flex items-center space-x-2 px-2.5 py-1.5 rounded-lg hover:bg-slate-800/40 text-slate-300"
              >
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                <span>Calendar</span>
              </button>
            </div>
          )}
        </div>

        {/* Remote Control Accordion */}
        <div>
          <button
            onClick={() => toggleSection('remoteControl')}
            className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-slate-800/60 text-slate-300 transition-all"
          >
            <div className="flex items-center space-x-3">
              <Radio className="w-5 h-5 text-cyan-400" />
              <span>Remote Control</span>
            </div>
            {openSections.remoteControl ? <ChevronDown className="w-4 h-4 text-cyan-400" /> : <ChevronRight className="w-4 h-4 text-slate-500" />}
          </button>

          {openSections.remoteControl && (
            <div className="ml-8 mt-1 space-y-1 pl-2 border-l border-slate-800 text-xs">
              <button
                onClick={() => setActiveTab('record_surround')}
                className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg hover:bg-slate-800/40 text-slate-300"
              >
                <div className="flex items-center space-x-2">
                  <Mic className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Record Surround</span>
                </div>
                <span className="px-1 py-0.2 text-[9px] bg-red-500 text-white rounded font-bold">HOT</span>
              </button>
              <button
                onClick={() => setActiveTab('capture_screenshots')}
                className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg hover:bg-slate-800/40 text-slate-300"
              >
                <div className="flex items-center space-x-2">
                  <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Capture Screenshots</span>
                </div>
                <span className="px-1 py-0.2 text-[9px] bg-red-500 text-white rounded font-bold">HOT</span>
              </button>
              <button
                onClick={() => setActiveTab('take_photos')}
                className="w-full flex items-center space-x-2 px-2.5 py-1.5 rounded-lg hover:bg-slate-800/40 text-slate-300"
              >
                <Camera className="w-3.5 h-3.5 text-cyan-400" />
                <span>Take Photos</span>
              </button>
            </div>
          )}
        </div>

        {/* Location Tracking Accordion */}
        <div>
          <button
            onClick={() => toggleSection('location')}
            className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-slate-800/60 text-slate-300 transition-all"
          >
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <span>Location Tracking</span>
            </div>
            {openSections.location ? <ChevronDown className="w-4 h-4 text-cyan-400" /> : <ChevronRight className="w-4 h-4 text-slate-500" />}
          </button>

          {openSections.location && (
            <div className="ml-8 mt-1 space-y-1 pl-2 border-l border-slate-800 text-xs">
              <button
                onClick={() => setActiveTab('locations')}
                className="w-full flex items-center space-x-2 px-2.5 py-1.5 rounded-lg hover:bg-slate-800/40 text-slate-300"
              >
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Locations</span>
              </button>
              <button
                onClick={() => setActiveTab('geofence')}
                className="w-full flex items-center space-x-2 px-2.5 py-1.5 rounded-lg hover:bg-slate-800/40 text-slate-300"
              >
                <Shield className="w-3.5 h-3.5 text-cyan-400" />
                <span>Geofence</span>
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
