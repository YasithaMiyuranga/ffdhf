import React, { useState } from 'react';
import { Search, ChevronDown, Calendar as CalendarIcon, MapPin } from 'lucide-react';

export default function Calendar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('All');

  const events = [
    {
      id: 1,
      event: "Mom's birthday",
      start: '2022-05-14 00:00:00',
      end: '2022-05-14 24:00:00',
      location: '',
      notes: 'order flowers online'
    },
    {
      id: 2,
      event: 'Dinner with Hannah',
      start: '2022-05-07 18:00:00',
      end: '2022-05-07 22:00:00',
      location: 'Melbount South 1st',
      notes: ''
    },
    {
      id: 3,
      event: 'Return library book',
      start: '2022-05-05 10:00:00',
      end: '2022-05-05 14:00:00',
      location: '',
      notes: ''
    },
    {
      id: 4,
      event: 'Project deadline',
      start: '2022-05-02 08:00:00',
      end: '2018-05-02 08:00:00',
      location: '',
      notes: ''
    },
    {
      id: 5,
      event: 'Family Picnic Day',
      start: '2022-05-01 08:00:00',
      end: '2018-05-01 09:00:00',
      location: 'FUIMOH Moutair',
      notes: ''
    },
    {
      id: 6,
      event: 'Cooking class',
      start: '2022-04-24 08:00:00',
      end: '2022-04-24 15:00:00',
      location: '',
      notes: ''
    },
    {
      id: 7,
      event: 'Game night',
      start: '2022-04-20 18:00:00',
      end: '2022-04-20 22:00:00',
      location: '',
      notes: ''
    },
    {
      id: 8,
      event: 'Whale watching cruise',
      start: '2022-04-13 10:00:00',
      end: '2022-04-13 17:00:00',
      location: '',
      notes: ''
    },
    {
      id: 9,
      event: 'Comedy club night',
      start: '2022-04-06 19:00:00',
      end: '2022-04-06 21:30:00',
      location: '',
      notes: ''
    },
    {
      id: 10,
      event: "Mount St.Helen's Hike",
      start: '2022-04-04 07:00:00',
      end: '2022-04-04 18:00:00',
      location: '',
      notes: ''
    }
  ];

  const filteredEvents = events.filter(e => {
    return e.event.toLowerCase().includes(searchQuery.toLowerCase()) || e.notes.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="bg-white rounded-2xl shadow-xs border border-slate-200/80 p-6 min-h-[720px] flex flex-col space-y-6">
      {/* Top Filter & Search */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <button className="flex items-center space-x-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors self-start">
          <span>{filter}</span>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
        </button>

        <div className="relative max-w-xs w-full">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-xs focus:outline-hidden focus:border-cyan-500 bg-slate-50/50"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
        </div>
      </div>

      {/* Events Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-slate-50/50">
              <th className="py-3 px-4">Event</th>
              <th className="py-3 px-4">Start Time</th>
              <th className="py-3 px-4">End Time</th>
              <th className="py-3 px-4">Event Location</th>
              <th className="py-3 px-4">Notes</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
            {filteredEvents.map((ev) => (
              <tr key={ev.id} className="hover:bg-slate-50/60 transition-colors">
                <td className="py-3.5 px-4 font-semibold text-slate-800">
                  <div className="flex items-center space-x-2.5">
                    <CalendarIcon className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>{ev.event}</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 font-mono text-slate-500">{ev.start}</td>
                <td className="py-3.5 px-4 font-mono text-slate-500">{ev.end}</td>
                <td className="py-3.5 px-4 text-cyan-600 font-semibold">
                  {ev.location && (
                    <div className="flex items-center space-x-1 hover:underline cursor-pointer">
                      <MapPin className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                      <span>{ev.location}</span>
                    </div>
                  )}
                </td>
                <td className="py-3.5 px-4 text-slate-500 italic">{ev.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
