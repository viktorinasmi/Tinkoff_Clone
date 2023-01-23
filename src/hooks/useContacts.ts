import {useState} from 'react';
import {IContact} from '@src/components/ui/Contacts/types';

export const useContacts = () => {
  const [contacts, setContacts] = useState<IContact>([]);
  const [isLoading, setIsLoading] = useState(false);

  return {contacts, isLoading};
};
