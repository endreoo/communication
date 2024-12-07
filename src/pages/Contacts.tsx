import React, { useState } from 'react';
import { UserPlus } from 'lucide-react';
import ContactList from '../components/contacts/ContactList';
import ContactFilters from '../components/contacts/ContactFilters';
import ContactForm from '../components/contacts/ContactForm';
import type { Contact, ContactFilter } from '../types';

const Contacts = () => {
  const [showForm, setShowForm] = useState(false);
  const [filters, setFilters] = useState<ContactFilter>({});

  const handleAddContact = (contact: Partial<Contact>) => {
    // Handle adding new contact
    console.log('New contact:', contact);
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Contacts</h1>
          <p className="text-gray-600 mt-1">Manage your contacts across all channels</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          <UserPlus className="w-5 h-5" />
          <span>Add Contact</span>
        </button>
      </div>

      <ContactFilters filters={filters} onFilterChange={setFilters} />
      <ContactList />

      {showForm && (
        <ContactForm
          onClose={() => setShowForm(false)}
          onSubmit={handleAddContact}
        />
      )}
    </div>
  );
};

export default Contacts;