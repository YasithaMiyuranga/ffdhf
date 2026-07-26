import React, { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';

export default function InAppPurchase() {
  const [selectedDate, setSelectedDate] = useState('2026-07-26');

  const purchases = [
    {
      id: 1,
      appName: 'Google Play Music',
      logo: 'https://images.unsplash.com/photo-1611339555312-e607c8352fd7?w=100&auto=format&fit=crop&q=80',
      amount: '$7.99',
      description: 'Monthly subscription',
      time: 'July 11, 2024, 10:00 AM',
      method: 'Google Play Store'
    },
    {
      id: 2,
      appName: 'Netflix',
      logo: 'https://images.unsplash.com/photo-1574375927938-d5a98e8fed85?w=100&auto=format&fit=crop&q=80',
      amount: '$12.99',
      description: 'Monthly subscription renewal',
      time: 'July 15, 2024, 9:30 AM',
      method: 'Credit Card'
    },
    {
      id: 3,
      appName: 'Epic Games Store',
      logo: 'https://images.unsplash.com/photo-1612287230202-1bf1d85d1bdf?w=100&auto=format&fit=crop&q=80',
      amount: '$9.99',
      description: 'In-game currency purchase',
      time: 'July 12, 2024, 7:00 PM',
      method: 'PayPal'
    },
    {
      id: 4,
      appName: 'Xbox Live',
      logo: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=100&auto=format&fit=crop&q=80',
      amount: '$14.99',
      description: 'Monthly subscription for online ...',
      time: 'July 14, 2024, 3:30 PM',
      method: 'Credit Card'
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xs border border-slate-200/80 p-6 min-h-[720px] flex flex-col space-y-6">
      {/* Top Date control filter */}
      <div className="flex justify-end">
        <div className="flex items-center space-x-2 border border-slate-200 rounded-lg px-2.5 py-1.5 text-[11px] text-slate-600 bg-white shadow-3xs">
          <button className="hover:text-slate-905 text-slate-400">
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center space-x-1.5 font-medium">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <span>{selectedDate}</span>
          </div>
          <button className="hover:text-slate-905 text-slate-400">
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Purchases log Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-slate-50/50">
              <th className="py-3 px-4">APP Name</th>
              <th className="py-3 px-4">Payment Amount</th>
              <th className="py-3 px-4">Item description</th>
              <th className="py-3 px-4">Payment Time</th>
              <th className="py-3 px-4">Payment Method</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
            {purchases.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50/60 transition-colors">
                <td className="py-3 px-4">
                  <div className="flex items-center space-x-3">
                    <img src={item.logo} alt="App logo" className="w-8 h-8 rounded-lg object-cover bg-slate-100 border border-slate-200" />
                    <span className="font-semibold text-slate-800">{item.appName}</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 font-mono font-bold text-cyan-600">{item.amount}</td>
                <td className="py-3.5 px-4 text-slate-500">{item.description}</td>
                <td className="py-3.5 px-4 font-mono text-slate-500">{item.time}</td>
                <td className="py-3.5 px-4 text-slate-650 font-semibold">{item.method}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
