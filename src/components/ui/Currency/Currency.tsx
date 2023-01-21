import {FC} from 'react';
import {Text, View} from 'react-native';
import {TypeCurrency} from '@src/components/Accounts/types';
import {styles} from './Currency.styles';

export const Currency: FC<{currency: TypeCurrency}> = ({currency}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerCircle}>
        <Text>1</Text>
      </View>
    </View>
  );
};
