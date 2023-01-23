import {Pressable, Text} from 'react-native';
import {FC} from 'react';
import {IContact} from '@src/components/ui/Contacts/types';
import {styles} from './ContactItem.styles';
import {Avatar} from '@src/components/ui/Avatar';

export const ContactItem: FC<{contact: IContact}> = ({contact}) => {
  console.log('contactitem===', contact.displayName);
  return (
    <Pressable style={styles.container}>
      <Avatar name={contact.displayName} size="large" />
      <Text style={styles.textContainerItem}>{contact.displayName}</Text>
    </Pressable>
  );
};
