import React from 'react';
import { Filter, Calendar } from 'lucide-react';
import type { Channel, Message, MessageFilter } from '../../types';

interface Props {
  filters: MessageFilter;
  onFilterChange: (filters: MessageFilter) => void;
}

const MessageFilters: React.FC<Props> = ({ filters, onFilterChange }) => {
  const handleChannelChange = (channel: Channel | undefined) => {
    onFilterChange({ ...filters, channel });
  };

  const handleStatusChange = (status: Message['status'] | undefined) => {
    onFilterChange({ ...filters, status });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
      <div className="flex items-center space-x-2 mb-4">
        <Filter className="w-5 h-5 text-gray-500" />
        <h2 className="text-lg font-semibold">Filters</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Channel
          </label>
          <select
            value={filters.channel || ''}
            onChange={(e) =>
              handleChannelChange(
                e.target.value ? (e.target.value as Channel) : undefined
              )
            }
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Channels</option>
            <option value="whatsapp">WhatsApp</option>
            <option value="email">Email</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Status
          </label>
          <select
            value={filters.status || ''}
            onChange={(e) =>
              handleStatusChange(
                e.target.value ? (e.target.value as Message['status']) : undefined
              )
            }
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Statuses</option>
            <option value="sent">Sent</option>
            <option value="delivered">Delivered</option>
            <option value="failed">Failed</option>
            <option value="queued">Queued</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Date Range
          </label>
          <button className="flex items-center space-x-2 px-4 py-2 w-full border border-gray-200 rounded-lg hover:bg-gray-50">
            <Calendar className="w-5 h-5 text-gray-500" />
            <span className="text-gray-600">Select dates</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageFilters;