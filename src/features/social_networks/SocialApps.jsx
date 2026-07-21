import React, { useState } from 'react';
import { Search, Calendar, RefreshCw } from 'lucide-react';

export default function SocialApps() {
  const [selectedApp, setSelectedApp] = useState('whatsapp');
  const [selectedContact, setSelectedContact] = useState('emily');

  // List of social app icons for left vertical switcher
  const socialApps = [
    { id: 'whatsapp', name: 'WhatsApp', color: 'bg-emerald-500', icon: 'WA' },
    { id: 'discord', name: 'Discord', color: 'bg-indigo-600', icon: 'DC' },
    { id: 'facebook', name: 'Facebook', color: 'bg-blue-600', icon: 'FB' },
    { id: 'instagram', name: 'Instagram', color: 'bg-pink-600', icon: 'IG' },
    { id: 'kik', name: 'Kik', color: 'bg-lime-600', icon: 'KIK' },
    { id: 'line', name: 'Line', color: 'bg-green-600', icon: 'LN' },
    { id: 'messenger', name: 'Messenger', color: 'bg-sky-500', icon: 'MS' },
    { id: 'skype', name: 'Skype', color: 'bg-cyan-500', icon: 'SK' },
    { id: 'snapchat', name: 'Snapchat', color: 'bg-amber-400', icon: 'SC' },
    { id: 'telegram', name: 'Telegram', color: 'bg-cyan-600', icon: 'TG' },
    { id: 'threads', name: 'Threads', color: 'bg-slate-900', icon: 'TH' },
    { id: 'tiktok', name: 'TikTok', color: 'bg-black', icon: 'TT' },
    { id: 'tinder', name: 'Tinder', color: 'bg-rose-500', icon: 'TD' },
    { id: 'viber', name: 'Viber', color: 'bg-purple-600', icon: 'VB' },
    { id: 'wechat', name: 'WeChat', color: 'bg-emerald-600', icon: 'WC' },
  ];

  // Contacts list
  const contacts = [
    { id: 'emily', name: 'Emily', time: '2025-03-03 14:34:03', snippet: 'Of course. You\'re my best friend. I don\'t wanna lose you. ❤️', avatarBg: 'bg-pink-300' },
    { id: 'jasmine', name: 'Jasmine', time: '2025-03-01 22:11:53', snippet: 'Nope. You need the confidence boost. You got this!', avatarBg: 'bg-amber-300' },
    { id: 'sophia', name: 'Sophia', time: '2025-03-01 18:59:22', snippet: 'Wanna see something even funnier?', avatarBg: 'bg-purple-300' },
    { id: 'aron', name: 'Aron', time: '2025-03-01 08:10:05', snippet: '😑...I\'ll allow it.', avatarBg: 'bg-emerald-300' },
  ];

  // Conversation messages for Emily matching screenshot
  const messages = [
    { id: 1, sender: 'Emily', text: 'I swear, I wasn\'t taking her side! You\'re my best friend.', time: '2025-03-03 10:55:53', isIncoming: true },
    { id: 2, sender: 'Target User', text: 'Then why didn\'t you say anything when she was talking bad about me?', time: '2025-03-03 11:45:13', isIncoming: false },
    { id: 3, sender: 'Emily', text: 'I... I didn\'t want to start drama. 🥺', time: '2025-03-03 12:11:05', isIncoming: true },
    { id: 4, sender: 'Target User', text: 'Well, now it just looks like you agree with her.', time: '2025-03-03 12:45:26', isIncoming: false },
    { id: 5, sender: 'Emily', text: 'No! That\'s not true at all.', time: '2025-03-03 13:01:03', isIncoming: true },
    { id: 6, sender: 'Emily', text: 'Look, I\'ll talk to her. I won\'t let her say stuff like that.', time: '2025-03-03 13:05:13', isIncoming: true },
    { id: 7, sender: 'Target User', text: 'You really mean that?', time: '2025-03-03 14:04:00', isIncoming: false },
    { id: 8, sender: 'Emily', text: 'Of course. You\'re my best friend. I don\'t wanna lose you. ❤️', time: '2025-03-03 14:34:03', isIncoming: true },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xs border border-slate-200/80 overflow-hidden flex h-[720px]">
      {/* 1. Leftmost Social App Icon Switcher Bar */}
      <div className="w-16 bg-slate-50 border-r border-slate-200 flex flex-col items-center py-4 space-y-3 overflow-y-auto shrink-0">
        {socialApps.map((app) => (
          <button
            key={app.id}
            onClick={() => setSelectedApp(app.id)}
            className={`w-10 h-10 rounded-2xl flex items-center justify-center font-bold text-xs text-white transition-all shadow-xs ${
              app.color
            } ${selectedApp === app.id ? 'ring-2 ring-cyan-500 ring-offset-2 scale-105' : 'opacity-80 hover:opacity-100'}`}
            title={app.name}
          >
            {app.icon}
          </button>
        ))}
      </div>

      {/* 2. Middle Contact List Column */}
      <div className="w-80 border-r border-slate-200 flex flex-col shrink-0">
        {/* App Title Header */}
        <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50/50">
          <h2 className="text-sm font-bold text-slate-800 capitalize">{selectedApp}</h2>
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
              <div className={`w-10 h-10 rounded-full ${contact.avatarBg} text-slate-700 font-bold flex items-center justify-center shrink-0`}>
                {contact.name[0]}
              </div>
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
            <div className="w-8 h-8 rounded-full bg-pink-300 text-slate-700 font-bold flex items-center justify-center text-xs">
              E
            </div>
            <span className="text-xs font-bold text-slate-800">Emily</span>
          </div>

          <div className="flex items-center space-x-3 text-xs">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
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
                <div className="w-7 h-7 rounded-full bg-pink-300 text-slate-700 font-bold text-[10px] flex items-center justify-center shrink-0 mt-1">
                  E
                </div>
              )}

              <div className={`max-w-md ${msg.isIncoming ? 'items-start' : 'items-end'} flex flex-col`}>
                <div
                  className={`p-3 rounded-2xl text-xs shadow-2xs leading-relaxed ${
                    msg.isIncoming
                      ? 'bg-white text-slate-800 rounded-tl-none border border-slate-200/60'
                      : 'bg-emerald-500 text-white rounded-tr-none'
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
