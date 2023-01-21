import {Alert, View} from 'react-native';
import {Padding} from '@src/components/ui/Padding';
import {styles} from './ApplyNewProduct.styles';
import {Button} from '@src/components/ui/Button';
import {asyncAlert} from '@src/components/utils/asyncAlert';
import {addDoc, collection, serverTimestamp} from 'firebase/firestore';
import {db} from '@src/firebase';
import {useAuth} from '@src/hooks/useAuth';
import {getRandomCardNumber} from '@src/components/utils/getRandomCardNumber';

export const ApplyNewProduct = () => {
  const {user} = useAuth();

  const registerHandler = async () => {
    try {
      const currency = await asyncAlert({
        title: 'Currency',
        msg: 'Select account currency:',
        buttons: {
          text: 'RUB',
          resolveValue: 'RUB',
          textSecond: 'USD',
          resolveValueSecond: 'USD',
        },
      });

      const cardType = await asyncAlert({
        title: 'Card type',
        msg: 'Select card type:',
        buttons: {
          text: 'Black',
          resolveValue: 'Tinkoff Black',
          textSecond: 'All airlines',
          resolveValueSecond: 'Tinkoff All Airlines',
        },
      });

      await addDoc(collection(db, 'accounts'), {
        timestamp: serverTimestamp(),
        userId: user?.uid,
        balance: 0,
        cardNumber: getRandomCardNumber(),
        currency,
        name: cardType,
      });
    } catch (error) {
      Alert.alert('Error apply new product', error);
    }
  };

  return (
    <View style={styles.container}>
      <Padding>
        <Button onPress={registerHandler} title="Apply for a new product" />
      </Padding>
    </View>
  );
};
