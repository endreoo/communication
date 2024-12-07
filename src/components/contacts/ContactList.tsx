import React from 'react';
import { Mail, MessageCircle, Tag, Users, MoreVertical, CheckCircle2, XCircle } from 'lucide-react';
import type { Contact } from '../../types';

const contacts: Contact[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1234567890',
    tags: ['customer', 'premium'],
    groups: ['newsletter', 'promotions'],
    lastContacted: '2024-03-14T15:30:00Z',
    status: 'active',
    createdAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '+1987654321',
    tags: ['prospect'],
    groups: ['newsletter'],
    lastContacted: '2024-03-13T10:15:00Z',
    status: 'active',
    createdAt: '2024-01-02T00:00:00Z'
  }
];

const ContactList = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Contact</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Channels</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Tags</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Groups</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Status</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Last Contacted</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div>
                    <p className="font-medium text-gray-900">{contact.name}</p>
                    <p className="text-sm text-gray-500">Created {new Date(contact.createdAt).toLocaleDateString()}</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex space-x-2">
                    {contact.email && (
                      <div className="p-1 bg-blue-50 rounded">
                        <Mail className="w-4 h-4 text-blue-500" />
                      </div>
                    )}
                    {contact.phone && (
                      <div className="p-1 bg-green-50 rounded">
                        <MessageCircle className="w-4 h-4 text-green-500" />
                      </div>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-2">
                    {contact.tags.map((tag) => (
                      <span key={tag} className="inline-flex items-center px-2 py-1 bg-gray-100 text-xs text-gray-600 rounded">
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-2">
                    {contact.groups.map((group) => (
                      <span key={group} className="inline-flex items-center px-2 py-1 bg-purple-100 text-xs text-purple-600 rounded">
                        <Users className="w-3 h-3 mr-1" />
                        {group}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    {contact.status === 'active' ? (
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                    ) : contact.status === 'blocked' ? (
                      <XCircle className="w-4 h-4 text-red-500" />
                    ) : (
                      <div className="w-4 h-4 rounded-full border-2 border-gray-300" />
                    )}
                    <span className={`capitalize text-sm ${
                      contact.status === 'active' ? 'text-green-500' :
                      contact.status === 'blocked' ? 'text-red-500' :
                      'text-gray-500'
                    }`}>
                      {contact.status}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-gray-600">
                    {contact.lastContacted ? new Date(contact.lastContacted).toLocaleDateString() : 'Never'}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <MoreVertical className="w-5 h-5 text-gray-400" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactList;