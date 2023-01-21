import {Text, View} from 'react-native';
import {IAccount} from '@src/components/Accounts/types';
import {FC} from 'react';
import {styles} from './Balance.styles';

export const Balance: FC<{account: IAccount}> = ({
  account: {balance, currency, name},
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.description}>
        {Intl.NumberFormat(undefined, {
          currency,
          style: 'currency',
        }).format(balance)}
      </Text>
    </View>
  );
};
