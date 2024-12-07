import React from 'react';
import { PlusCircle, Calendar, FileText } from 'lucide-react';

const QuickActions = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <button className="flex items-center justify-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-lg transition-colors">
        <PlusCircle className="w-5 h-5" />
        <span>New Message</span>
      </button>
      <button className="flex items-center justify-center space-x-2 bg-purple-500 hover:bg-purple-600 text-white p-4 rounded-lg transition-colors">
        <Calendar className="w-5 h-5" />
        <span>Schedule Campaign</span>
      </button>
      <button className="flex items-center justify-center space-x-2 bg-gray-500 hover:bg-gray-600 text-white p-4 rounded-lg transition-colors">
        <FileText className="w-5 h-5" />
        <span>Manage Templates</span>
      </button>
    </div>
  );
};

export default QuickActions;