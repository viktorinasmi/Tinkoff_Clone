import {View} from 'react-native';
import {FC} from 'react';
import {IAccount} from '@src/components/Accounts/types';
import {styles} from './AccountItem.styles';
import {Currency} from '@src/components/ui/Currency';
import {Balance} from '@src/components/ui/Balance';
import {ImageCard} from '@src/components/ui/ImageCard';

export const AccountItem: FC<{account: IAccount}> = ({account}) => {
  return (
    <View style={styles.container}>
      <Currency currency={account.currency} />
      <Balance account={account} />
      <ImageCard account={account} />
    </View>
  );
};
