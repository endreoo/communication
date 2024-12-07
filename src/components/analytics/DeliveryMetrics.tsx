import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { CheckCircle2, XCircle, Clock } from 'lucide-react';

const data = [
  { name: 'Delivered', value: 85, color: '#22C55E' },
  { name: 'Failed', value: 5, color: '#EF4444' },
  { name: 'Pending', value: 10, color: '#F59E0B' },
];

const DeliveryMetrics = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-6">Delivery Performance</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-green-50 rounded-lg">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Delivered</p>
            <p className="text-xl font-semibold text-gray-900">85%</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-red-50 rounded-lg">
            <XCircle className="w-5 h-5 text-red-500" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Failed</p>
            <p className="text-xl font-semibold text-gray-900">5%</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-yellow-50 rounded-lg">
            <Clock className="w-5 h-5 text-yellow-500" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Pending</p>
            <p className="text-xl font-semibold text-gray-900">10%</p>
          </div>
        </div>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DeliveryMetrics;