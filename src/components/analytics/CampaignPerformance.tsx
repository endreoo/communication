import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp } from 'lucide-react';

const data = [
  { name: 'Week 1', engagement: 65, openRate: 45, clickRate: 30 },
  { name: 'Week 2', engagement: 59, openRate: 42, clickRate: 28 },
  { name: 'Week 3', engagement: 80, openRate: 60, clickRate: 45 },
  { name: 'Week 4', engagement: 81, openRate: 58, clickRate: 48 },
  { name: 'Week 5', engagement: 76, openRate: 54, clickRate: 44 },
  { name: 'Week 6', engagement: 85, openRate: 62, clickRate: 50 },
];

const CampaignPerformance = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Campaign Performance</h2>
        <div className="flex items-center space-x-2 text-green-500">
          <TrendingUp className="w-5 h-5" />
          <span className="text-sm font-medium">15% increase</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">Avg. Engagement Rate</p>
          <p className="text-2xl font-semibold text-gray-900">74.3%</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">Avg. Open Rate</p>
          <p className="text-2xl font-semibold text-gray-900">53.5%</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">Avg. Click Rate</p>
          <p className="text-2xl font-semibold text-gray-900">40.8%</p>
        </div>
      </div>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="engagement" stroke="#8B5CF6" name="Engagement Rate" />
            <Line type="monotone" dataKey="openRate" stroke="#3B82F6" name="Open Rate" />
            <Line type="monotone" dataKey="clickRate" stroke="#22C55E" name="Click Rate" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CampaignPerformance;