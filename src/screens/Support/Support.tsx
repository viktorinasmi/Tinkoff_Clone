import {ScrollView, View} from 'react-native';
import {Layout} from '@src/components/Layout';
import {styles} from './Support.styles';
import {HeaderSupport} from '@src/components/ui/HeaderSupport';
import {Message} from '@src/components/ui/Message';
import {useMessages} from '@src/hooks/useMessages';
import {FieldMessage} from '@src/components/ui/FieldMessage';

export const Support = () => {
  const {messages} = useMessages();

  return (
    <Layout isScrollView={false}>
      <View style={styles.container}>
        <HeaderSupport />
        <ScrollView style={styles.containerMessage}>
          {messages.map(msg => (
            <Message key={msg._id} message={msg} />
          ))}
        </ScrollView>
        <FieldMessage />
      </View>
    </Layout>
  );
};
