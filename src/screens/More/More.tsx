import {Text, View} from 'react-native';
import {Layout} from '@src/components/Layout';
import {Heading} from '@src/components/ui/Heading';
import {styles} from './More.styles';
import {Currencies} from '@src/components/ui/Currencies';
import {Menu} from '@src/components/ui/Menu';

export const More = () => {
  return (
    <Layout>
      <Heading text="More" />
      <View style={styles.container}>
        <Currencies />
        <Menu />
        <Text style={styles.text}>Version 5.20.6</Text>
      </View>
    </Layout>
  );
};
