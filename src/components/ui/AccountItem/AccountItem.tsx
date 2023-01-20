import {Text, View} from 'react-native';
import {FC} from 'react';
import {IAccount} from '@src/components/Accounts/types';

export const AccountItem: FC<{account: IAccount}> = ({account}) => {
  return (
    <View>
      <Text>accountItem</Text>
    </View>
  );
};
