import React, { useState } from 'react';
import { Search, Calendar, RefreshCw } from 'lucide-react';

// SVG Icons for Social Apps Switcher Bar
const WhatsAppSvg = () => (
  <svg className="w-6 h-6 text-emerald-500" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);

const DiscordSvg = () => (
  <svg className="w-5 h-5 text-indigo-500" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

const FacebookSvg = () => (
  <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramSvg = () => (
  <svg className="w-5 h-5 text-pink-600" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const TelegramSvg = () => (
  <svg className="w-5 h-5 text-sky-500" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm5.221 8.243c-.158.558-1.079 5.03-1.568 7.422-.207 1.011-.564 1.35-.91 1.383-.755.071-1.328-.5-2.06-1.01-.157-.109-2.062-1.306-2.296-1.503-.321-.271-.628-.415-.05-.989.135-.134 2.474-2.268 2.52-2.464.006-.027.012-.13-.047-.183-.06-.052-.149-.034-.213-.02-.09.02-1.528.97-4.316 2.852-.408.281-.778.418-1.11.411-.366-.008-1.07-.207-1.593-.378-.642-.209-1.15-.319-1.106-.673.023-.185.28-.375.77-.57 3.018-1.314 5.032-2.181 6.042-2.601 2.883-1.2 3.483-1.409 3.874-1.416.086 0 .28.02.404.122.105.086.134.204.148.286.015.082.033.267.018.42z"/>
  </svg>
);

const TikTokSvg = () => (
  <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 1 0 5.55 6.29V9.41a8.27 8.27 0 0 0 4.77 1.52V7.47a4.85 4.85 0 0 1-1.0-.78z"/>
  </svg>
);

const MessengerSvg = () => (
  <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.304 2.246.464 3.443.464 6.627 0 12-4.974 12-11.111C24 4.974 18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26 6.559-6.963 3.13 3.259 5.889-3.259-6.56 6.964z"/>
  </svg>
);

const SnapchatSvg = () => (
  <svg className="w-5 h-5 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.007 0C5.932 0 1.258 4.293 1.258 10.15c0 3.09 1.488 5.626 3.655 7.16-.297.876-1.09 1.841-2.298 2.766-.213.163-.092.493.176.493 2.756 0 4.995-.972 6.552-2.15.221.028.444.043.664.043 6.075 0 10.749-4.293 10.749-10.15C22.756 4.293 18.082 0 12.007 0z"/>
  </svg>
);

export default function SocialApps() {
  const [selectedApp, setSelectedApp] = useState('whatsapp');
  const [selectedContact, setSelectedContact] = useState('emily');

  // List of social app icons matching reference screenshot 5
  const socialApps = [
    { id: 'whatsapp', name: 'WhatsApp', icon: WhatsAppSvg, bg: 'bg-emerald-50 text-emerald-500' },
    { id: 'discord', name: 'Discord', icon: DiscordSvg, bg: 'bg-indigo-50 text-indigo-500' },
    { id: 'facebook', name: 'Facebook', icon: FacebookSvg, bg: 'bg-blue-50 text-blue-600' },
    { id: 'instagram', name: 'Instagram', icon: InstagramSvg, bg: 'bg-pink-50 text-pink-600' },
    { id: 'kik', name: 'Kik', icon: WhatsAppSvg, bg: 'bg-lime-50 text-lime-600' },
    { id: 'line', name: 'Line', icon: WhatsAppSvg, bg: 'bg-green-50 text-green-600' },
    { id: 'messenger', name: 'Messenger', icon: MessengerSvg, bg: 'bg-sky-50 text-sky-500' },
    { id: 'skype', name: 'Skype', icon: DiscordSvg, bg: 'bg-cyan-50 text-cyan-500' },
    { id: 'snapchat', name: 'Snapchat', icon: SnapchatSvg, bg: 'bg-amber-50 text-amber-500' },
    { id: 'telegram', name: 'Telegram', icon: TelegramSvg, bg: 'bg-sky-50 text-sky-500' },
    { id: 'threads', name: 'Threads', icon: TikTokSvg, bg: 'bg-slate-100 text-slate-900' },
    { id: 'tiktok', name: 'TikTok', icon: TikTokSvg, bg: 'bg-slate-900 text-white' },
  ];

  // Contacts with realistic avatar photos matching screenshot 5
  const contacts = [
    {
      id: 'emily',
      name: 'Emily',
      time: '2025-03-03 14:34:03',
      snippet: 'Of course. You\'re my best friend. I don\'t wanna lose you. ❤️',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
    },
    {
      id: 'jasmine',
      name: 'Jasmine',
      time: '2025-03-01 22:11:53',
      snippet: 'Nope. You need the confidence boost. You got this!',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    },
    {
      id: 'sophia',
      name: 'Sophia',
      time: '2025-03-01 18:59:22',
      snippet: 'Wanna see something even funnier?',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    },
    {
      id: 'aron',
      name: 'Aron',
      time: '2025-03-01 08:10:05',
      snippet: '😑...I\'ll allow it.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
    },
  ];

  const messages = [
    { id: 1, sender: 'Emily', text: 'Still, you know what she said about me. And you still talked to her?', time: '2025-03-03 10:52:25', isIncoming: true },
    { id: 2, sender: 'Emily', text: 'I swear, I wasn\'t taking her side! You\'re my best friend.', time: '2025-03-03 10:55:53', isIncoming: true },
    { id: 3, sender: 'Target User', text: 'Then why didn\'t you say anything when she was talking bad about me?', time: '2025-03-03 11:05:13', isIncoming: false },
    { id: 4, sender: 'Emily', text: 'I... I didn\'t want to start drama. 🥺', time: '2025-03-03 12:11:05', isIncoming: true },
    { id: 5, sender: 'Target User', text: 'Well, now it just looks like you agree with her.', time: '2025-03-03 12:45:26', isIncoming: false },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xs border border-slate-200/80 overflow-hidden flex h-[740px]">
      {/* 1. Leftmost Social App Icon Switcher Bar with Real Icons */}
      <div className="w-16 bg-slate-50 border-r border-slate-200 flex flex-col items-center py-4 space-y-3 overflow-y-auto shrink-0">
        {socialApps.map((app) => {
          const IconComp = app.icon;
          const isSelected = selectedApp === app.id;
          return (
            <button
              key={app.id}
              onClick={() => setSelectedApp(app.id)}
              className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all shadow-2xs ${
                isSelected
                  ? 'ring-2 ring-cyan-500 bg-cyan-50 text-cyan-600 scale-105'
                  : 'bg-white hover:bg-slate-100 border border-slate-200/60'
              }`}
              title={app.name}
            >
              <IconComp />
            </button>
          );
        })}
      </div>

      {/* 2. Middle Contact List Column */}
      <div className="w-80 border-r border-slate-200 flex flex-col shrink-0">
        {/* App Title Header */}
        <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50/50">
          <h2 className="text-sm font-bold text-slate-800 capitalize">WhatsApp</h2>
          <RefreshCw className="w-4 h-4 text-cyan-600 cursor-pointer hover:rotate-180 transition-transform" />
        </div>

        {/* Contacts */}
        <div className="divide-y divide-slate-100 overflow-y-auto flex-1">
          {contacts.map((contact) => (
            <button
              key={contact.id}
              onClick={() => setSelectedContact(contact.id)}
              className={`w-full p-3.5 text-left flex items-start space-x-3 transition-colors ${
                selectedContact === contact.id ? 'bg-cyan-50/60 border-l-4 border-cyan-500' : 'hover:bg-slate-50'
              }`}
            >
              <img
                src={contact.avatar}
                alt={contact.name}
                className="w-10 h-10 rounded-full object-cover shrink-0 border border-slate-200"
              />
              <div className="min-w-0 flex-1">
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="text-xs font-bold text-slate-800 truncate">{contact.name}</h4>
                  <span className="text-[10px] text-slate-400 shrink-0 ml-1">{contact.time.split(' ')[0]}</span>
                </div>
                <p className="text-xs text-slate-500 truncate">{contact.snippet}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* 3. Right Chat Conversation Pane */}
      <div className="flex-1 flex flex-col bg-[#f5f7fb]">
        {/* Chat Header & Filters */}
        <div className="p-3.5 bg-white border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
              alt="Emily"
              className="w-8 h-8 rounded-full object-cover border border-slate-200"
            />
            <span className="text-xs font-bold text-slate-800">Emily</span>
          </div>

          <div className="flex items-center space-x-3 text-xs">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="pl-8 pr-3 py-1.5 border border-slate-200 rounded-lg text-xs w-48 focus:outline-none focus:border-cyan-500"
              />
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
            </div>

            <div className="flex items-center space-x-1 border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-500 bg-slate-50">
              <Calendar className="w-3.5 h-3.5" />
              <span>Start Date - End Date</span>
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-opacity-30 bg-repeat bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start space-x-2.5 ${msg.isIncoming ? 'justify-start' : 'justify-end'}`}
            >
              {msg.isIncoming && (
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
                  alt="Emily"
                  className="w-7 h-7 rounded-full object-cover shrink-0 mt-1 border border-slate-200"
                />
              )}

              <div className={`max-w-md ${msg.isIncoming ? 'items-start' : 'items-end'} flex flex-col`}>
                <div
                  className={`p-3 rounded-2xl text-xs leading-relaxed ${
                    msg.isIncoming
                      ? 'bg-white text-slate-800 rounded-tl-none border border-slate-200/60 shadow-2xs'
                      : 'bg-emerald-500 text-white rounded-tr-none shadow-2xs'
                  }`}
                >
                  {msg.text}
                </div>
                <span className="text-[10px] text-slate-400 mt-1 px-1">{msg.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
