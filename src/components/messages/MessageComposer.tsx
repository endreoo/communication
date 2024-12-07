import React, { useState } from 'react';
import { MessageCircle, Mail, Paperclip, Send, X } from 'lucide-react';
import type { Channel } from '../../types';

const MessageComposer = () => {
  const [channel, setChannel] = useState<Channel>('whatsapp');
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');
  const [attachments, setAttachments] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle message submission
    console.log({ channel, recipient, subject, content, attachments });
  };

  const handleAttachment = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const file = e.target.files[0];
      setAttachments([...attachments, file.name]);
    }
  };

  const removeAttachment = (index: number) => {
    setAttachments(attachments.filter((_, i) => i !== index));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex space-x-4 mb-6">
        <button
          type="button"
          onClick={() => setChannel('whatsapp')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
            channel === 'whatsapp'
              ? 'bg-green-50 text-green-600'
              : 'bg-gray-50 text-gray-600'
          }`}
        >
          <MessageCircle className="w-5 h-5" />
          <span>WhatsApp</span>
        </button>
        <button
          type="button"
          onClick={() => setChannel('email')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
            channel === 'email'
              ? 'bg-blue-50 text-blue-600'
              : 'bg-gray-50 text-gray-600'
          }`}
        >
          <Mail className="w-5 h-5" />
          <span>Email</span>
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Recipient
          </label>
          <input
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            placeholder={channel === 'email' ? 'Email address' : 'Phone number'}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {channel === 'email' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Message subject"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={4}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Attachments
          </label>
          <div className="flex flex-wrap gap-2 mb-2">
            {attachments.map((file, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-50 px-3 py-1 rounded-lg"
              >
                <span className="text-sm text-gray-600">{file}</span>
                <button
                  type="button"
                  onClick={() => removeAttachment(index)}
                  className="ml-2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
          <label className="flex items-center space-x-2 px-4 py-2 bg-gray-50 text-gray-600 rounded-lg cursor-pointer hover:bg-gray-100">
            <Paperclip className="w-5 h-5" />
            <span>Add attachment</span>
            <input
              type="file"
              onChange={handleAttachment}
              className="hidden"
            />
          </label>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="flex items-center space-x-2 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <Send className="w-5 h-5" />
            <span>Send Message</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default MessageComposer;