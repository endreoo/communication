export type Channel = 'whatsapp' | 'email';

export interface Message {
  id: string;
  channel: Channel;
  content: string;
  status: 'sent' | 'delivered' | 'failed' | 'queued';
  recipient: string;
  timestamp: string;
  subject?: string;
  attachments?: string[];
}

export interface Campaign {
  id: string;
  name: string;
  channel: Channel;
  scheduledDate: string;
  status: 'scheduled' | 'running' | 'completed' | 'failed';
  recipients: number;
}

export interface MessageFilter {
  channel?: Channel;
  status?: Message['status'];
  dateRange?: {
    start: string;
    end: string;
  };
  search?: string;
}

export interface Contact {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  tags: string[];
  groups: string[];
  lastContacted?: string;
  status: 'active' | 'inactive' | 'blocked';
  createdAt: string;
}

export interface ContactFilter {
  search?: string;
  tags?: string[];
  groups?: string[];
  status?: Contact['status'];
}