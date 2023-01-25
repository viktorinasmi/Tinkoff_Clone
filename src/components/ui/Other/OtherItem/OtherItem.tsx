import {Pressable, Text} from 'react-native';
import {FC} from 'react';
import {IOtherItem} from '@src/components/ui/Other/types';
import {Icon} from '@src/components/ui/Other/Icon';
import {styles} from './OtherItem.styles';
import {BOX_SHADOW} from '@src/styles';
import {handleTransfer} from '@src/components/ui/Other/handleTransfer';
import {useAccounts} from '@src/hooks/useAccounts';

const CASH_CARD_NUMBER = '4917 2154 8691 5737';

export const OtherItem: FC<{item: IOtherItem}> = ({item}) => {
  const {accounts} = useAccounts();
  return (
    <Pressable
      style={[styles.container, BOX_SHADOW]}
      onPress={handleTransfer.bind(this, accounts[0], CASH_CARD_NUMBER)}>
      <Icon iconName={item.iconName} />
      <Text style={styles.text}>{item.title}</Text>
    </Pressable>
  );
};
