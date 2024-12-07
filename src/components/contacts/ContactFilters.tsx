import React from 'react';
import { Filter, Search, Tag, Users } from 'lucide-react';
import type { ContactFilter } from '../../types';

interface Props {
  filters: ContactFilter;
  onFilterChange: (filters: ContactFilter) => void;
}

const ContactFilters: React.FC<Props> = ({ filters, onFilterChange }) => {
  const handleSearchChange = (search: string) => {
    onFilterChange({ ...filters, search });
  };

  const handleStatusChange = (status: ContactFilter['status']) => {
    onFilterChange({ ...filters, status });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
      <div className="flex items-center space-x-2 mb-4">
        <Filter className="w-5 h-5 text-gray-500" />
        <h2 className="text-lg font-semibold">Filters</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search contacts..."
              value={filters.search || ''}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <select
            value={filters.status || ''}
            onChange={(e) => handleStatusChange(e.target.value as ContactFilter['status'])}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Statuses</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="blocked">Blocked</option>
          </select>
        </div>

        <div>
          <button className="flex items-center space-x-2 w-full px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
            <Tag className="w-5 h-5 text-gray-500" />
            <span className="text-gray-600">Select Tags</span>
          </button>
        </div>

        <div>
          <button className="flex items-center space-x-2 w-full px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
            <Users className="w-5 h-5 text-gray-500" />
            <span className="text-gray-600">Select Groups</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactFilters;