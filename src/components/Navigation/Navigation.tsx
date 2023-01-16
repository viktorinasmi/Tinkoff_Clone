import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useAuth} from '@src/hooks/useAuth';
import {Auth} from '@src/screens/auth';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  const {user} = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {user ? <></> : <Stack.Screen name="Auth" component={Auth} />}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
