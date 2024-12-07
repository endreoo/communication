import React from 'react';
import ChannelSettings from '../components/settings/ChannelSettings';
import NotificationSettings from '../components/settings/NotificationSettings';
import AccountSettings from '../components/settings/AccountSettings';

const Settings = () => {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
        <p className="text-gray-600 mt-1">Manage your account and communication preferences</p>
      </div>

      <div className="space-y-6">
        <ChannelSettings />
        <NotificationSettings />
        <AccountSettings />
      </div>
    </div>
  );
};

export default Settings;