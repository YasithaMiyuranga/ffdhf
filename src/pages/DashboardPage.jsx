import React from 'react';
import QuickActionsGrid from '../features/dashboard/QuickActionsGrid';
import MapWidget from '../features/dashboard/MapWidget';
import ActivityStats from '../features/dashboard/ActivityStats';

export default function DashboardPage({ onSelectCategory }) {
  return (
    <div className="space-y-6">
      {/* Quick Monitoring Actions Grid */}
      <QuickActionsGrid onSelectCategory={onSelectCategory} />

      {/* Location Map and Activity Stats Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-6">
          <MapWidget />
        </div>
        <div className="lg:col-span-6">
          <ActivityStats />
        </div>
      </div>
    </div>
  );
}
