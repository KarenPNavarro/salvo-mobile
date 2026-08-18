import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';

export type Relationship = 'Family' | 'Friend' | 'Partner' | 'Other';
export type ContactStatus = 'Accepted' | 'Pending';

export type Contact = {
  id: string;
  name: string;
  phone: string;
  email?: string;
  relationship: Relationship;
  status: ContactStatus;
  autoCall: boolean;
  sendLocation: boolean;
  shareCamera: boolean;
  alertsSent: number;
  avgResponseSeconds: number;
};

export type NewContactInput = {
  name: string;
  phone: string;
  email?: string;
  relationship: Relationship;
};

const MAX_CONTACTS = 5;

const initialContacts: Contact[] = [
  {
    id: '1',
    name: 'Sara Johnson',
    phone: '+1 (555) 123-4567',
    email: 'sara@example.com',
    relationship: 'Family',
    status: 'Accepted',
    autoCall: true,
    sendLocation: true,
    shareCamera: false,
    alertsSent: 3,
    avgResponseSeconds: 12,
  },
  {
    id: '2',
    name: 'John Smith',
    phone: '+1 (555) 908-2210',
    relationship: 'Friend',
    status: 'Pending',
    autoCall: false,
    sendLocation: true,
    shareCamera: false,
    alertsSent: 0,
    avgResponseSeconds: 0,
  },
  {
    id: '3',
    name: 'Emily Davis',
    phone: '+1 (555) 908-2210',
    email: 'emily@example.com',
    relationship: 'Partner',
    status: 'Accepted',
    autoCall: true,
    sendLocation: true,
    shareCamera: true,
    alertsSent: 5,
    avgResponseSeconds: 8,
  },
];

type ContactsContextValue = {
  contacts: Contact[];
  maxContacts: number;
  addContact: (input: NewContactInput) => Contact;
  removeContact: (id: string) => void;
  updateContact: (id: string, patch: Partial<Contact>) => void;
  getContact: (id: string) => Contact | undefined;
};

const ContactsContext = createContext<ContactsContextValue | null>(null);

export function ContactsProvider({ children }: { children: ReactNode }) {
  const [contacts, setContacts] = useState<Contact[]>(initialContacts);

  const addContact = useCallback((input: NewContactInput) => {
    const contact: Contact = {
      id: Date.now().toString(),
      name: input.name,
      phone: input.phone,
      email: input.email,
      relationship: input.relationship,
      status: 'Pending',
      autoCall: true,
      sendLocation: true,
      shareCamera: false,
      alertsSent: 0,
      avgResponseSeconds: 0,
    };
    setContacts((prev) => (prev.length >= MAX_CONTACTS ? prev : [...prev, contact]));
    return contact;
  }, []);

  const removeContact = useCallback((id: string) => {
    setContacts((prev) => prev.filter((c) => c.id !== id));
  }, []);

  const updateContact = useCallback((id: string, patch: Partial<Contact>) => {
    setContacts((prev) => prev.map((c) => (c.id === id ? { ...c, ...patch } : c)));
  }, []);

  const getContact = useCallback((id: string) => contacts.find((c) => c.id === id), [contacts]);

  const value = useMemo(
    () => ({ contacts, maxContacts: MAX_CONTACTS, addContact, removeContact, updateContact, getContact }),
    [contacts, addContact, removeContact, updateContact, getContact]
  );

  return <ContactsContext.Provider value={value}>{children}</ContactsContext.Provider>;
}

export function useContacts() {
  const ctx = useContext(ContactsContext);
  if (!ctx) throw new Error('useContacts must be used within a ContactsProvider');
  return ctx;
}
