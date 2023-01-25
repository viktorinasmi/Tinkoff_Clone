import {FC} from 'react';
import {View} from 'react-native';
import {TypeCurrency} from '@src/components/Accounts/types';
import {styles} from './Currency.styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export const Currency: FC<{currency: TypeCurrency}> = ({currency}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerCircle}>
        <FontAwesome5
          color="#488CF9"
          size={11}
          name={currency == 'RUB' ? 'ruble-sign' : 'dollar-sign'}
        />
      </View>
    </View>
  );
};
