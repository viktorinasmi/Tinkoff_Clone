import {Text, View} from 'react-native';
import {FC} from 'react';
import {IMessage} from '@src/components/ui/Message/types';
import {useAuth} from '@src/hooks/useAuth';
import {styles} from './Message.styles';

export const Message: FC<{message: IMessage}> = ({message}) => {
  const {user} = useAuth();

  const isMsgByAuthUser = user?.uid === message.userId;

  return (
    <View style={[styles.container, isMsgByAuthUser && styles.containerAuth]}>
      <Text style={[styles.text, isMsgByAuthUser && styles.textAuth]}>
        {message.text}
      </Text>
      <Text style={[styles.timestamp, isMsgByAuthUser && styles.timestampAuth]}>
        {message.timestamp}
      </Text>
    </View>
  );
};
