import {Alert, Pressable, TextInput, View} from 'react-native';
import {useAuth} from '@src/hooks/useAuth';
import {useState} from 'react';
import {styles} from './FieldMessage.styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {addDoc, collection, serverTimestamp} from 'firebase/firestore';
import {db} from '@src/firebase';

export const FieldMessage = () => {
  const {user} = useAuth();
  const [message, setMessage] = useState(' ');

  const handleSendMessage = async () => {
    try {
      await addDoc(collection(db, 'messages'), {
        timestamp: serverTimestamp(),
        userId: user.uid,
        text: message,
      });
    } catch (error: any) {
      Alert.alert('Err add new msg: ', error);
    } finally {
      setMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your message"
        onChangeText={setMessage}
        value={message}
        autoCapitalize="none"
        showSoftInputOnFocus={false}
      />
      <Pressable onPress={handleSendMessage}>
        <FontAwesome5 name="arrow-circle-up" size={36} style={styles.icon} />
      </Pressable>
    </View>
  );
};
