import {Text, View} from 'react-native';
import {Button} from '@src/components/ui/Button';
import {useAuth} from '@src/hooks/useAuth';
import {Header} from '@src/components/ui/Header';

export const Home = () => {
  const {logout} = useAuth();
  return (
    <View>
      <Text>Auth</Text>
      <Button onPress={() => logout()} title={'кнопка'} />
      <Header />
    </View>
  );
};
