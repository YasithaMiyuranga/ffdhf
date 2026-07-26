import React, { useState } from 'react';
import { Search } from 'lucide-react';

export default function Outlook() {
  const [activeEmailId, setActiveEmailId] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const emails = [
    {
      id: 1,
      sender: 'Google',
      subject: 'Google Verification Code',
      snippet: 'Dear Google User, We received a request to access your Google Account lilbobby...',
      time: '2024-01-20',
      from: 'Google <noreply@google.com>',
      to: 'Bobby <lilbobby@gmail.com>',
      body: `Dear Google User, We received a request to access your Google Account lilbobby@gmail.com through your email address. Your Google verification code is: 284009. Looking forward to your approval. If you did not request this code, it is possible that someone else is trying to access the Google Account. Do not forward or give this code to anyone. You received this message because this email address is listed as the recovery email for the Google Account. If that is incorrect, please click here to remove your email address from that account.

------------------------------------------------------------------------------------------
This email can't receive replies. For more information, visit the Google Accounts Help Center. © Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA`
    },
    {
      id: 2,
      sender: 'John Willis',
      subject: 'Lil Bobby - Chemistry Project Question',
      snippet: 'Dear Mr. Willis, Lil Bobby\'s here, from your 7K class on Thursday. Thank you for ...',
      time: '2024-01-16',
      from: 'John Willis <jwillis@school.edu>',
      to: 'Bobby <lilbobby@gmail.com>',
      body: 'Dear Mr. Willis, Lil Bobby here from your 7K chemistry class. I had a quick question regarding the lab report submission deadline. Is it still this Thursday, or did we get an extension due to the school sports day?'
    },
    {
      id: 3,
      sender: 'Airbnb',
      subject: "We're interested in your feedback!",
      snippet: 'Hi Bobby, Thanks for using Airbnb. We really appreciate you choosing Airbnb fo...',
      time: '2024-01-12',
      from: 'Airbnb <noreply@airbnb.com>',
      to: 'Bobby <lilbobby@gmail.com>',
      body: "Hi Bobby, We hope you had a great trip! We're always looking for ways to improve our service, and we'd love to hear your thoughts on your recent stay. Please take 2 minutes to fill out this quick survey."
    },
    {
      id: 4,
      sender: 'Caroline Instructor',
      subject: 'Review Syllabus',
      snippet: 'Hello Students, I look forward to learning with you this semester! Please review ...',
      time: '2024-01-08',
      from: 'Caroline Instructor <caroline.instructor@academy.org>',
      to: 'Bobby <lilbobby@gmail.com>',
      body: 'Hello Students, welcome to the class! Please make sure to download and review the course syllabus before our first session next Monday. We will discuss the grading structure and course expectations.'
    }
  ];

  const filteredEmails = emails.filter(email => {
    return email.sender.toLowerCase().includes(searchQuery.toLowerCase()) || 
           email.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
           email.snippet.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const activeEmail = emails.find(e => e.id === activeEmailId) || emails[0];

  return (
    <div className="bg-white rounded-2xl shadow-xs border border-slate-200/80 min-h-[720px] flex overflow-hidden">
      {/* Left List Pane */}
      <div className="w-1/3 border-r border-slate-200 flex flex-col">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between flex-wrap gap-2">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:outline-hidden focus:border-cyan-500 bg-slate-50/50"
            />
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2" />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto divide-y divide-slate-100">
          {filteredEmails.map((email) => (
            <button
              key={email.id}
              onClick={() => setActiveEmailId(email.id)}
              className={`w-full p-4 text-left flex flex-col space-y-1 transition-colors ${
                activeEmailId === email.id ? 'bg-cyan-50/40 border-l-4 border-cyan-500' : 'hover:bg-slate-50/40'
              }`}
            >
              <div className="flex justify-between items-baseline">
                <span className="text-xs font-bold text-slate-800">{email.sender}</span>
                <span className="text-[10px] text-slate-400 font-mono shrink-0">{email.time}</span>
              </div>
              <h4 className="text-[11px] font-semibold text-slate-700 truncate">{email.subject}</h4>
              <p className="text-[10px] text-slate-400 truncate">{email.snippet}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Right Details Pane */}
      <div className="flex-1 p-6 bg-slate-50/30 overflow-y-auto flex flex-col space-y-6">
        <div className="border-b border-slate-100 pb-4 space-y-2">
          <div className="flex justify-between items-start">
            <h2 className="text-sm font-bold text-slate-800">{activeEmail.subject}</h2>
            <span className="text-[10px] text-slate-400 font-mono">{activeEmail.time}</span>
          </div>

          <div className="text-[11px] text-slate-500 space-y-0.5">
            <p><span className="font-semibold text-slate-400">From:</span> {activeEmail.from}</p>
            <p><span className="font-semibold text-slate-400">To:</span> {activeEmail.to}</p>
          </div>
        </div>

        {/* Email Body text content */}
        <div className="text-xs text-slate-700 leading-relaxed whitespace-pre-line font-normal flex-1">
          {activeEmail.body}
        </div>
      </div>
    </div>
  );
}
