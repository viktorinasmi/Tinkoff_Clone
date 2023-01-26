import {Image, Text, View} from 'react-native';
import {FC} from 'react';
import {styles} from './HeaderSupport.styles';

export const HeaderSupport: FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../../public/icons/tinkoff.png')}
        style={styles.logo}
      />
      <View>
        <Text style={styles.textHeader}>Support</Text>
        <Text style={styles.textDescription}>We are there 24/7</Text>
      </View>
    </View>
  );
};
