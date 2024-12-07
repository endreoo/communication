import React from 'react';
import AnalyticsSummary from '../components/dashboard/AnalyticsSummary';
import QuickActions from '../components/dashboard/QuickActions';
import ActivityFeed from '../components/dashboard/ActivityFeed';

const Dashboard = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">Dashboard</h1>
      <AnalyticsSummary />
      <QuickActions />
      <ActivityFeed />
    </div>
  );
};

export default Dashboard;