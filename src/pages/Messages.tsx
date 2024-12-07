import React, { useState } from 'react';
import MessageComposer from '../components/messages/MessageComposer';
import MessageList from '../components/messages/MessageList';
import MessageFilters from '../components/messages/MessageFilters';
import type { MessageFilter } from '../types';

const Messages = () => {
  const [showComposer, setShowComposer] = useState(false);
  const [filters, setFilters] = useState<MessageFilter>({});

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Messages</h1>
        <button
          onClick={() => setShowComposer(!showComposer)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          {showComposer ? 'Hide Composer' : 'New Message'}
        </button>
      </div>

      {showComposer && (
        <div className="mb-8">
          <MessageComposer />
        </div>
      )}

      <MessageFilters filters={filters} onFilterChange={setFilters} />
      <MessageList />
    </div>
  );
};

export default Messages;