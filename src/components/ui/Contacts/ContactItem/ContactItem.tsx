import {Pressable, Text} from 'react-native';
import {FC} from 'react';
import {IContact} from '@src/components/ui/Contacts/types';
import {styles} from './ContactItem.styles';
import {Avatar} from '@src/components/ui/Avatar';
import {handleTransfer} from '@src/components/ui/Other/handleTransfer';
import {useAccounts} from '@src/hooks/useAccounts';

export const ContactItem: FC<{contact: IContact}> = ({contact}) => {
  const {accounts} = useAccounts();
  return (
    <Pressable
      style={styles.container}
      onPress={handleTransfer.bind(this, accounts[0], contact.cardNumber)}>
      <Avatar name={contact.displayName} size="large" />
      <Text style={styles.textContainerItem}>{contact.displayName}</Text>
    </Pressable>
  );
};
