import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, MessageSquare, Calendar, Settings, BarChart2, Users } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white h-screen fixed left-0 top-0 border-r border-gray-200">
      <div className="p-6">
        <h1 className="text-xl font-bold text-gray-800">CommConnect</h1>
      </div>
      <nav className="mt-6">
        <NavItem to="/" icon={<Home />} label="Dashboard" />
        <NavItem to="/messages" icon={<MessageSquare />} label="Messages" />
        <NavItem to="/campaigns" icon={<Calendar />} label="Campaigns" />
        <NavItem to="/analytics" icon={<BarChart2 />} label="Analytics" />
        <NavItem to="/contacts" icon={<Users />} label="Contacts" />
        <NavItem to="/settings" icon={<Settings />} label="Settings" />
      </nav>
    </div>
  );
};

const NavItem = ({ icon, label, to }: { icon: React.ReactNode; label: string; to: string }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center space-x-3 px-6 py-3 text-gray-600 hover:bg-gray-50 hover:text-blue-500 transition-colors ${
          isActive ? 'text-blue-500 bg-blue-50' : ''
        }`
      }
    >
      {icon}
      <span className="font-medium">{label}</span>
    </NavLink>
  );
};

export default Sidebar;