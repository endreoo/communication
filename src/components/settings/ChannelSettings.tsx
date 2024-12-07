import React from 'react';
import { MessageCircle, Mail, Plus, CheckCircle2, XCircle } from 'lucide-react';

const ChannelSettings = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
      <h2 className="text-lg font-semibold mb-4">Communication Channels</h2>
      
      <div className="space-y-6">
        <div className="flex items-start justify-between p-4 border border-gray-200 rounded-lg">
          <div className="flex items-start space-x-4">
            <div className="p-2 bg-green-50 rounded-lg">
              <MessageCircle className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">WhatsApp Business API</h3>
              <p className="text-sm text-gray-600 mt-1">Connect your WhatsApp Business account to send messages</p>
              <div className="flex items-center mt-2">
                <CheckCircle2 className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-sm text-green-600">Connected</span>
              </div>
            </div>
          </div>
          <button className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
            Configure
          </button>
        </div>

        <div className="flex items-start justify-between p-4 border border-gray-200 rounded-lg">
          <div className="flex items-start space-x-4">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Mail className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">SMTP Server</h3>
              <p className="text-sm text-gray-600 mt-1">Configure your SMTP server for sending emails</p>
              <div className="flex items-center mt-2">
                <XCircle className="w-4 h-4 text-red-500 mr-1" />
                <span className="text-sm text-red-600">Not configured</span>
              </div>
            </div>
          </div>
          <button className="px-4 py-2 text-sm bg-blue-500 text-white hover:bg-blue-600 rounded-lg">
            Set up
          </button>
        </div>

        <button className="flex items-center justify-center w-full p-4 border border-dashed border-gray-300 rounded-lg hover:bg-gray-50">
          <Plus className="w-5 h-5 text-gray-400 mr-2" />
          <span className="text-gray-600">Add new channel</span>
        </button>
      </div>
    </div>
  );
};

export default ChannelSettings;