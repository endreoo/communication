import React from 'react';
import { Calendar, Mail, MessageCircle, Clock, CheckCircle2, XCircle, MoreVertical } from 'lucide-react';
import type { Campaign } from '../../types';

const campaigns: Campaign[] = [
  {
    id: '1',
    name: 'Spring Sale Newsletter',
    channel: 'email',
    scheduledDate: '2024-03-20T10:00:00Z',
    status: 'scheduled',
    recipients: 2500
  },
  {
    id: '2',
    name: 'Customer Feedback Survey',
    channel: 'whatsapp',
    scheduledDate: '2024-03-18T15:30:00Z',
    status: 'running',
    recipients: 1000
  },
  {
    id: '3',
    name: 'Product Launch Announcement',
    channel: 'email',
    scheduledDate: '2024-03-25T09:00:00Z',
    status: 'scheduled',
    recipients: 5000
  }
];

const CampaignList = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Campaign</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Channel</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Schedule</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Recipients</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Status</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((campaign) => (
              <tr key={campaign.id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${
                      campaign.channel === 'whatsapp' ? 'bg-green-50' : 'bg-blue-50'
                    }`}>
                      {campaign.channel === 'whatsapp' ? (
                        <MessageCircle className="w-5 h-5 text-green-500" />
                      ) : (
                        <Mail className="w-5 h-5 text-blue-500" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{campaign.name}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="capitalize text-gray-600">{campaign.channel}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">
                      {new Date(campaign.scheduledDate).toLocaleDateString()}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-gray-600">{campaign.recipients.toLocaleString()}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    {campaign.status === 'scheduled' ? (
                      <Clock className="w-4 h-4 text-yellow-500" />
                    ) : campaign.status === 'running' ? (
                      <div className="w-4 h-4 rounded-full border-2 border-blue-500 border-t-transparent animate-spin" />
                    ) : campaign.status === 'completed' ? (
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                    ) : (
                      <XCircle className="w-4 h-4 text-red-500" />
                    )}
                    <span className={`capitalize ${
                      campaign.status === 'scheduled' ? 'text-yellow-500' :
                      campaign.status === 'running' ? 'text-blue-500' :
                      campaign.status === 'completed' ? 'text-green-500' :
                      'text-red-500'
                    }`}>
                      {campaign.status}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <MoreVertical className="w-5 h-5 text-gray-400" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CampaignList;