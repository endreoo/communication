import React from 'react';
import { Mail, MessageCircle, CheckCircle2, XCircle } from 'lucide-react';
import type { Message } from '../../types';

const messages: Message[] = [
  {
    id: '1',
    channel: 'whatsapp',
    content: 'Monthly newsletter sent to marketing segment',
    status: 'delivered',
    recipient: 'Marketing Group',
    timestamp: '2024-03-15T10:30:00Z'
  },
  {
    id: '2',
    channel: 'email',
    content: 'Password reset instructions',
    status: 'sent',
    recipient: 'john.doe@example.com',
    timestamp: '2024-03-15T10:28:00Z'
  }
];

const ActivityFeed = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
      <div className="space-y-4">
        {messages.map((message) => (
          <div key={message.id} className="flex items-start space-x-4">
            <div className={`p-2 rounded-lg ${
              message.channel === 'whatsapp' ? 'bg-green-50' : 'bg-blue-50'
            }`}>
              {message.channel === 'whatsapp' ? (
                <MessageCircle className="w-5 h-5 text-green-500" />
              ) : (
                <Mail className="w-5 h-5 text-blue-500" />
              )}
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-900">{message.content}</p>
              <div className="flex items-center mt-1 space-x-2">
                <span className="text-xs text-gray-500">{message.recipient}</span>
                <span className="text-gray-300">•</span>
                <span className="text-xs text-gray-500">
                  {new Date(message.timestamp).toLocaleTimeString()}
                </span>
                {message.status === 'delivered' ? (
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                ) : message.status === 'failed' ? (
                  <XCircle className="w-4 h-4 text-red-500" />
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;