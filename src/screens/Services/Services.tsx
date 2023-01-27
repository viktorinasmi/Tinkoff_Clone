import {Text, View} from 'react-native';
import {Layout} from '@src/components/Layout';
import {services} from '@src/screens/Services/data';
import {ServiceItem} from '@src/components/ui/ServiceItem';
import {styles} from './Services.styles';

export const Services = () => {
  return (
    <Layout>
      <Text style={styles.text}>Moscow</Text>
      <View style={styles.containerItem}>
        {services.map(service => (
          <ServiceItem key={service.title + Date.now()} service={service} />
        ))}
      </View>
    </Layout>
  );
};
