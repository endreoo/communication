import React from 'react';
import { Mail, MessageCircle, CheckCircle2, XCircle, Clock } from 'lucide-react';
import type { Message } from '../../types';

const messages: Message[] = [
  {
    id: '1',
    channel: 'whatsapp',
    content: 'Your order #12345 has been shipped!',
    status: 'delivered',
    recipient: '+1234567890',
    timestamp: '2024-03-15T10:30:00Z'
  },
  {
    id: '2',
    channel: 'email',
    subject: 'Welcome to CommConnect',
    content: 'Thank you for joining our platform...',
    status: 'sent',
    recipient: 'john@example.com',
    timestamp: '2024-03-15T10:28:00Z'
  },
  {
    id: '3',
    channel: 'whatsapp',
    content: 'Your appointment is confirmed for tomorrow at 2 PM',
    status: 'failed',
    recipient: '+1987654321',
    timestamp: '2024-03-15T10:25:00Z'
  }
];

const MessageList = () => {
  return (
    <div className="space-y-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4">
              <div
                className={`p-2 rounded-lg ${
                  message.channel === 'whatsapp'
                    ? 'bg-green-50'
                    : 'bg-blue-50'
                }`}
              >
                {message.channel === 'whatsapp' ? (
                  <MessageCircle className="w-5 h-5 text-green-500" />
                ) : (
                  <Mail className="w-5 h-5 text-blue-500" />
                )}
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-gray-900">
                    {message.recipient}
                  </span>
                  {message.subject && (
                    <>
                      <span className="text-gray-300">•</span>
                      <span className="text-gray-600">{message.subject}</span>
                    </>
                  )}
                </div>
                <p className="text-gray-600 mt-1">{message.content}</p>
                <div className="flex items-center mt-2 space-x-4">
                  <span className="text-sm text-gray-500">
                    {new Date(message.timestamp).toLocaleString()}
                  </span>
                  <div className="flex items-center space-x-1">
                    {message.status === 'delivered' ? (
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                    ) : message.status === 'failed' ? (
                      <XCircle className="w-4 h-4 text-red-500" />
                    ) : (
                      <Clock className="w-4 h-4 text-yellow-500" />
                    )}
                    <span
                      className={`text-sm capitalize ${
                        message.status === 'delivered'
                          ? 'text-green-500'
                          : message.status === 'failed'
                          ? 'text-red-500'
                          : 'text-yellow-500'
                      }`}
                    >
                      {message.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageList;