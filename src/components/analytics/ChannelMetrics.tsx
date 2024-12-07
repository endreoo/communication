import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MessageCircle, Mail } from 'lucide-react';

const data = [
  { name: 'Mon', whatsapp: 4000, email: 2400 },
  { name: 'Tue', whatsapp: 3000, email: 1398 },
  { name: 'Wed', whatsapp: 2000, email: 9800 },
  { name: 'Thu', whatsapp: 2780, email: 3908 },
  { name: 'Fri', whatsapp: 1890, email: 4800 },
  { name: 'Sat', whatsapp: 2390, email: 3800 },
  { name: 'Sun', whatsapp: 3490, email: 4300 },
];

const ChannelMetrics = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-6">Message Volume by Channel</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
          <div className="p-3 bg-green-100 rounded-lg">
            <MessageCircle className="w-6 h-6 text-green-500" />
          </div>
          <div>
            <p className="text-sm text-gray-600">WhatsApp Messages</p>
            <p className="text-2xl font-semibold text-gray-900">19,550</p>
            <p className="text-sm text-green-600">+12.5% from last week</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
          <div className="p-3 bg-blue-100 rounded-lg">
            <Mail className="w-6 h-6 text-blue-500" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Email Messages</p>
            <p className="text-2xl font-semibold text-gray-900">30,404</p>
            <p className="text-sm text-blue-600">+8.2% from last week</p>
          </div>
        </div>
      </div>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="whatsapp" fill="#22C55E" name="WhatsApp" />
            <Bar dataKey="email" fill="#3B82F6" name="Email" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChannelMetrics;