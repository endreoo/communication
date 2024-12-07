import React from 'react';
import ChannelMetrics from '../components/analytics/ChannelMetrics';
import DeliveryMetrics from '../components/analytics/DeliveryMetrics';
import CampaignPerformance from '../components/analytics/CampaignPerformance';

const Analytics = () => {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Analytics</h1>
        <p className="text-gray-600 mt-2">Track and analyze your communication performance</p>
      </div>

      <div className="space-y-8">
        <ChannelMetrics />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <DeliveryMetrics />
          <CampaignPerformance />
        </div>
      </div>
    </div>
  );
};

export default Analytics;