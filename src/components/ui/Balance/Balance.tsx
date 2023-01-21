import {Text, View} from 'react-native';
import {IAccount} from '@src/components/Accounts/types';
import {FC} from 'react';

export const Balance: FC<{account: IAccount}> = ({account}) => {
  return (
    <View>
      <Text>1</Text>
    </View>
  );
};
