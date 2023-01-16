import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useAuth} from '@src/hooks/useAuth';
import {Auth} from '@src/screens/Auth';
import {Home} from '@src/screens/Home';
import {Profile} from '@src/screens/Profile';
import {Payments} from '@src/screens/Payments';
import {Services} from '@src/screens/Services';
import {Support} from '@src/screens/Support';
import {More} from '@src/screens/More';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  const {user} = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {user ? (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Payments" component={Payments} />
            <Stack.Screen name="Services" component={Services} />
            <Stack.Screen name="Support" component={Support} />
            <Stack.Screen name="More" component={More} />
          </>
        ) : (
          <Stack.Screen name="Auth" component={Auth} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
