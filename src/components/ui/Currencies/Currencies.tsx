import {Text, View} from 'react-native';
import {FC} from 'react';
import {useCurrencies} from '@src/hooks/useCurrencies';
import {styles} from './Currencies.styles';
import {BOX_SHADOW} from '@src/styles';
import {Loader} from '@src/components/ui/Loader';

export const Currencies: FC = () => {
  const {currencies, isLoading} = useCurrencies();
  return (
    <View style={[styles.container, BOX_SHADOW]}>
      {isLoading ? (
        <Loader />
      ) : (
        currencies.map(cur => (
          <View key={cur.name} style={[styles.containerCurrency, BOX_SHADOW]}>
            <Text style={styles.textName}>{cur.name}</Text>
            <Text style={styles.textValue}>{cur.value}</Text>
          </View>
        ))
      )}
    </View>
  );
};
