import React, { useState } from 'react';
import { User, Phone, Mail, Globe, MapPin, Gift, ShieldAlert } from 'lucide-react';

export default function Contacts() {
  const [activeTab, setActiveTab] = useState('contacts');
  const [activeContactId, setActiveContactId] = useState(1);

  const contactsList = [
    {
      id: 1,
      name: 'David Rudolph',
      status: 'Block',
      hasDot: true,
      phone: { work: '8525570745', home: '', others: '' },
      mail: { work: 'DavidRudolph154@gmail.com', home: '', others: '' },
      url: 'www.sheperd.com',
      address: { work: '861 Bringham Avenue, Los Angeles, CA 90049, The United States of America', home: '', others: '' },
      birthday: 'Anniversary'
    },
    {
      id: 2,
      name: 'Fred',
      status: 'Allow',
      hasDot: false,
      phone: { work: '888-276-7202', home: '888-276-7200', others: '' },
      mail: { work: 'fred@example.com', home: '', others: '' },
      url: '',
      address: { work: '123 Fake Street, CA', home: '', others: '' },
      birthday: '1995-10-12'
    },
    {
      id: 3,
      name: 'Harper',
      status: 'Allow',
      hasDot: false,
      phone: { work: '800-523-0201', home: '', others: '' },
      mail: { work: 'harper@example.com', home: '', others: '' },
      url: '',
      address: { work: '456 Elm Ave, NY', home: '', others: '' },
      birthday: ''
    },
    {
      id: 4,
      name: 'Josh Gerdes',
      status: 'Block',
      hasDot: false,
      phone: { work: '909-394-9899', home: '', others: '' },
      mail: { work: 'josh@example.com', home: '', others: '' },
      url: '',
      address: { work: '789 Oak Rd, TX', home: '', others: '' },
      birthday: ''
    },
    {
      id: 5,
      name: 'Thomas Hiemer',
      status: 'Block',
      hasDot: false,
      phone: { work: '415-356-2000', home: '', others: '' },
      mail: { work: 'thomas@example.com', home: '', others: '' },
      url: '',
      address: { work: '101 Pine St, SF', home: '', others: '' },
      birthday: ''
    },
    {
      id: 6,
      name: 'Zoe',
      status: 'Block',
      hasDot: false,
      phone: { work: '800-523-0201', home: '', others: '' },
      mail: { work: 'zoe@example.com', home: '', others: '' },
      url: '',
      address: { work: '202 Cedar Ln, WA', home: '', others: '' },
      birthday: ''
    }
  ];

  const activeContact = contactsList.find(c => c.id === activeContactId) || contactsList[0];

  return (
    <div className="bg-white rounded-2xl shadow-xs border border-slate-200/80 min-h-[720px] flex overflow-hidden">
      {/* Left Switcher column */}
      <div className="w-1/3 border-r border-slate-200 flex flex-col">
        {/* Contact Tab Headers */}
        <div className="flex border-b border-slate-200 text-xs font-bold text-center">
          <button
            onClick={() => setActiveTab('contacts')}
            className={`flex-1 py-3 flex items-center justify-center space-x-1.5 border-b-2 transition-all ${
              activeTab === 'contacts' ? 'border-cyan-500 text-cyan-600' : 'border-transparent text-slate-500'
            }`}
          >
            <User className="w-4 h-4" />
            <span>Contacts</span>
          </button>
          <button
            onClick={() => setActiveTab('blocked')}
            className={`flex-1 py-3 flex items-center justify-center space-x-1.5 border-b-2 transition-all relative ${
              activeTab === 'blocked' ? 'border-cyan-500 text-cyan-600' : 'border-transparent text-slate-500'
            }`}
          >
            <span>Blocked Contacts</span>
            <span className="absolute top-3 right-6 w-1.5 h-1.5 bg-red-500 rounded-full" />
          </button>
        </div>

        {/* Contact Cards List */}
        <div className="flex-1 overflow-y-auto divide-y divide-slate-50">
          {contactsList.map((contact) => (
            <button
              key={contact.id}
              onClick={() => setActiveContactId(contact.id)}
              className={`w-full p-4 text-left flex items-center justify-between transition-colors ${
                activeContactId === contact.id ? 'bg-cyan-50/50 border-l-4 border-cyan-500' : 'hover:bg-slate-50/50'
              }`}
            >
              <div className="flex items-center space-x-3 min-w-0">
                <div className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-semibold shrink-0">
                  {contact.name[0]}
                </div>
                <span className="text-xs font-bold text-slate-800 truncate">{contact.name}</span>
              </div>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full relative shrink-0 ${
                contact.status === 'Block' ? 'text-red-500 hover:bg-red-50' : 'text-green-600 hover:bg-green-50'
              }`}>
                {contact.status}
                {contact.hasDot && (
                  <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-red-500 rounded-full" />
                )}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Right Details Card */}
      <div className="flex-1 p-8 bg-slate-50/30 overflow-y-auto flex flex-col items-center">
        {/* Profile Card Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-8 w-full max-w-md">
          <div className="w-20 h-20 rounded-full bg-slate-200 border-2 border-white shadow-md flex items-center justify-center text-slate-500 text-3xl font-bold">
            {activeContact.name[0]}
          </div>
          <h2 className="text-sm font-extrabold text-slate-800">{activeContact.name}</h2>
          <div className="w-full border-b border-slate-100" />
        </div>

        {/* Detailed Metadata fields */}
        <div className="w-full max-w-md space-y-6 text-xs">
          {/* Phone */}
          <div className="flex items-start space-x-4">
            <Phone className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
            <div className="flex-1 space-y-1">
              <span className="text-[10px] font-semibold text-slate-400 block">Phone:</span>
              {activeContact.phone.work && (
                <div>
                  <span className="text-[10px] text-slate-400 font-mono">Work</span>
                  <p className="font-semibold text-slate-700 font-mono">{activeContact.phone.work}</p>
                </div>
              )}
              {activeContact.phone.home && (
                <div>
                  <span className="text-[10px] text-slate-400 font-mono">Home</span>
                  <p className="font-semibold text-slate-700 font-mono">{activeContact.phone.home}</p>
                </div>
              )}
            </div>
          </div>

          {/* Mail */}
          <div className="flex items-start space-x-4">
            <Mail className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
            <div className="flex-1 space-y-1">
              <span className="text-[10px] font-semibold text-slate-400 block">Mail:</span>
              {activeContact.mail.work && (
                <div>
                  <span className="text-[10px] text-slate-400 font-mono">Work</span>
                  <p className="font-semibold text-slate-700">{activeContact.mail.work}</p>
                </div>
              )}
            </div>
          </div>

          {/* URL */}
          {activeContact.url && (
            <div className="flex items-start space-x-4">
              <Globe className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
              <div className="flex-1 space-y-1">
                <span className="text-[10px] font-semibold text-slate-400 block">URL:</span>
                <p className="font-semibold text-cyan-600 hover:underline cursor-pointer">{activeContact.url}</p>
              </div>
            </div>
          )}

          {/* Address */}
          <div className="flex items-start space-x-4">
            <MapPin className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
            <div className="flex-1 space-y-1">
              <span className="text-[10px] font-semibold text-slate-400 block">Address:</span>
              {activeContact.address.work && (
                <div>
                  <span className="text-[10px] text-slate-400 font-mono">Work</span>
                  <p className="font-semibold text-slate-700 leading-relaxed">{activeContact.address.work}</p>
                </div>
              )}
            </div>
          </div>

          {/* Birthdays */}
          {activeContact.birthday && (
            <div className="flex items-start space-x-4">
              <Gift className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
              <div className="flex-1 space-y-1">
                <span className="text-[10px] font-semibold text-slate-400 block">Birthdays:</span>
                <p className="font-semibold text-slate-700">{activeContact.birthday}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
