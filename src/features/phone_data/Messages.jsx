import React, { useState, useEffect } from 'react';
import { Search, Calendar, ChevronLeft, ChevronRight, User, Play, Image as ImageIcon } from 'lucide-react';
import { api } from '../../services/api';

export default function Messages() {
  const [activeThread, setActiveThread] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [threads, setThreads] = useState([]);
  const [chatMessages, setChatMessages] = useState({});

  const defaultMockThreads = [
    {
      id: 1,
      name: 'Mark',
      time: '2025-03-21 16:19:35',
      snippet: 'Usual place. Be there or be squa...',
    },
    {
      id: 2,
      name: 'Dora',
      time: '2025-02-06 16:40:46',
      snippet: 'Yes. He showed off his pet in th...',
    },
    {
      id: 3,
      name: 'Edward',
      time: '2025-02-05 10:33:32',
      snippet: 'Same here.',
    },
    {
      id: 4,
      name: 'Dad',
      time: '2025-02-01 16:41:01',
      snippet: "I hope you haven't invited any ve...",
    }
  ];

  const defaultMockChatMessages = {
    1: [
      {
        id: 1,
        sender: 'Mark',
        text: 'Hey, do you wanna hangout and get some food?',
        time: '2025-03-21 16:12:28',
        isMe: false,
      },
      {
        id: 2,
        sender: 'Me',
        text: 'Yea...where do you want to go?',
        time: '2025-03-21 16:13:28',
        isMe: true,
      },
      {
        id: 3,
        sender: 'Me',
        text: 'show you a Audio',
        time: '2025-03-21 16:14:22',
        isMe: true,
        isAudio: true,
      },
      {
        id: 4,
        sender: 'Mark',
        text: "I'll call you tonight and tell you.",
        time: '2025-03-21 16:15:28',
        isMe: false,
      },
      {
        id: 5,
        sender: 'Me',
        text: 'show you a Video',
        time: '2025-03-21 16:16:22',
        isMe: true,
        isVideo: true,
      }
    ],
    2: [
      { id: 1, sender: 'Dora', text: 'Yes. He showed off his pet in the chat.', time: '2025-02-06 16:40:46', isMe: false }
    ],
    3: [
      { id: 1, sender: 'Edward', text: 'Same here.', time: '2025-02-05 10:33:32', isMe: false }
    ],
    4: [
      { id: 1, sender: 'Dad', text: "I hope you haven't invited any guests.", time: '2025-02-01 16:41:01', isMe: false }
    ]
  };

  useEffect(() => {
    async function loadMessages() {
      const serverLogs = await api.getLogs('sms');
      if (serverLogs && serverLogs.length > 0) {
        // Group by sender name
        const groups = {};
        serverLogs.forEach((item, index) => {
          const senderName = item.details.name || item.details.phoneNumber || 'Unknown';
          if (!groups[senderName]) {
            groups[senderName] = [];
          }
          groups[senderName].push({
            id: item._id || index,
            sender: senderName,
            text: item.details.message || '',
            time: new Date(item.timestamp).toISOString().replace('T', ' ').substring(0, 19),
            isMe: item.details.isMe || false
          });
        });

        // Format threads list
        const dbThreads = Object.keys(groups).map((name, index) => {
          const threadId = `db-${index}`;
          const messages = groups[name];
          const latestMsg = messages[0]; // Sorted by timestamp desc in API
          return {
            id: threadId,
            name: name,
            time: latestMsg.time,
            snippet: latestMsg.text.length > 30 ? latestMsg.text.substring(0, 30) + '...' : latestMsg.text
          };
        });

        // Format chatMessages map
        const dbChatMessages = {};
        Object.keys(groups).forEach((name, index) => {
          const threadId = `db-${index}`;
          // Sort messages asc for the chat bubble timeline view
          dbChatMessages[threadId] = [...groups[name]].reverse();
        });

        setThreads([...dbThreads, ...defaultMockThreads]);
        setChatMessages({ ...dbChatMessages, ...defaultMockChatMessages });
        if (dbThreads.length > 0) {
          setActiveThread(dbThreads[0].id);
        }
      } else {
        setThreads(defaultMockThreads);
        setChatMessages(defaultMockChatMessages);
      }
    }
    loadMessages();
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-xs border border-slate-200/80 min-h-[720px] flex overflow-hidden">
      {/* Left Sidebar Switcher */}
      <div className="w-1/3 border-r border-slate-200 flex flex-col">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <span className="text-xs font-bold text-slate-800">Recent Chats</span>
        </div>
        <div className="flex-1 overflow-y-auto divide-y divide-slate-50">
          {threads.map((thread) => (
            <button
              key={thread.id}
              onClick={() => setActiveThread(thread.id)}
              className={`w-full p-4 text-left flex items-start space-x-3 transition-colors ${
                activeThread === thread.id ? 'bg-cyan-50/50 border-l-4 border-cyan-500' : 'hover:bg-slate-50/50'
              }`}
            >
              <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-semibold shrink-0">
                {thread.name[0]}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-0.5">
                  <span className="text-xs font-bold text-slate-800">{thread.name}</span>
                  <span className="text-[10px] text-slate-400 font-mono">{thread.time.split(' ')[0]}</span>
                </div>
                <p className="text-[11px] text-slate-500 truncate">{thread.snippet}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Right Chat Pane */}
      <div className="flex-1 flex flex-col bg-slate-50/30">
        {/* Chat Header */}
        <div className="p-4 bg-white border-b border-slate-200 flex items-center justify-between">
          <span className="text-xs font-bold text-slate-800">{threads.find(t => t.id === activeThread)?.name}</span>
          <div className="relative max-w-xs">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8 pr-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:outline-hidden focus:border-cyan-500 bg-slate-50/50"
            />
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2" />
          </div>
        </div>

        {/* Message List */}
        <div className="flex-1 p-6 overflow-y-auto space-y-6">
          {chatMessages[activeThread]?.map((msg) => (
            <div key={msg.id} className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex items-start space-x-2.5 max-w-[70%] ${msg.isMe ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <div className="w-8 h-8 rounded-full bg-slate-300 flex items-center justify-center text-slate-500 text-xs shrink-0 font-semibold">
                  {msg.isMe ? 'Me' : msg.sender[0]}
                </div>
                <div className="space-y-1">
                  <div className={`rounded-2xl p-3 text-xs leading-relaxed ${
                    msg.isMe ? 'bg-cyan-500 text-white rounded-tr-none' : 'bg-slate-100 text-slate-800 rounded-tl-none'
                  }`}>
                    {msg.isAudio ? (
                      <div className="space-y-2 w-64">
                        <p className="font-semibold text-[11px] mb-1">show you a Audio</p>
                        <div className="flex items-center space-x-3 bg-white/20 p-2 rounded-xl">
                          <button className="p-1.5 bg-white rounded-full text-cyan-600">
                            <Play className="w-3.5 h-3.5 fill-current" />
                          </button>
                          <div className="flex-1 h-1.5 bg-white/30 rounded-full relative">
                            <div className="absolute left-0 top-0 h-full w-0 bg-white rounded-full" />
                          </div>
                          <span className="text-[10px] font-mono">0:00 / 0:24</span>
                        </div>
                      </div>
                    ) : msg.isVideo ? (
                      <div className="space-y-2 w-64">
                        <p className="font-semibold text-[11px] mb-1">show you a Video</p>
                        <div className="bg-slate-900 rounded-xl overflow-hidden aspect-video relative flex items-center justify-center border border-white/10">
                          <ImageIcon className="w-8 h-8 text-white/40" />
                          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                            <Play className="w-8 h-8 text-white fill-current" />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <p>{msg.text}</p>
                    )}
                  </div>
                  <p className="text-[9px] text-slate-400 font-mono text-right">{msg.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
