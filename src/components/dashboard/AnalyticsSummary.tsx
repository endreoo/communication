import React from 'react';
import { BarChart3, Mail, MessageCircle } from 'lucide-react';

const AnalyticsSummary = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">Total Messages</p>
            <p className="text-2xl font-semibold mt-1">24,892</p>
          </div>
          <div className="bg-blue-50 p-3 rounded-lg">
            <BarChart3 className="w-6 h-6 text-blue-500" />
          </div>
        </div>
        <div className="mt-4 flex space-x-4">
          <div className="flex items-center">
            <MessageCircle className="w-4 h-4 text-green-500 mr-1" />
            <span className="text-sm text-gray-600">12,456 WhatsApp</span>
          </div>
          <div className="flex items-center">
            <Mail className="w-4 h-4 text-blue-500 mr-1" />
            <span className="text-sm text-gray-600">12,436 Email</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">Delivery Rate</p>
            <p className="text-2xl font-semibold mt-1">98.7%</p>
          </div>
          <div className="bg-green-50 p-3 rounded-lg">
            <MessageCircle className="w-6 h-6 text-green-500" />
          </div>
        </div>
        <div className="mt-4">
          <div className="w-full bg-gray-100 rounded-full h-2">
            <div className="bg-green-500 h-2 rounded-full" style={{ width: '98.7%' }}></div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">Active Campaigns</p>
            <p className="text-2xl font-semibold mt-1">8</p>
          </div>
          <div className="bg-purple-50 p-3 rounded-lg">
            <BarChart3 className="w-6 h-6 text-purple-500" />
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="text-sm text-gray-600">
            <span className="font-medium">5</span> WhatsApp
          </div>
          <div className="text-sm text-gray-600">
            <span className="font-medium">3</span> Email
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsSummary;