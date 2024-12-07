import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import CampaignList from '../components/campaigns/CampaignList';
import CampaignScheduler from '../components/campaigns/CampaignScheduler';

const Campaigns = () => {
  const [showScheduler, setShowScheduler] = useState(false);

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Campaigns</h1>
        <button
          onClick={() => setShowScheduler(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          <PlusCircle className="w-5 h-5" />
          <span>New Campaign</span>
        </button>
      </div>

      <CampaignList />

      {showScheduler && (
        <CampaignScheduler onClose={() => setShowScheduler(false)} />
      )}
    </div>
  );
};

export default Campaigns;