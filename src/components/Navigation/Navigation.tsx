import React, {useEffect, useState} from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useAuth} from '@src/hooks/useAuth';
import {Auth} from '@src/screens/Auth';
import {Home} from '@src/screens/Home';
import {Profile} from '@src/screens/Profile';
import {Payments} from '@src/screens/Payments';
import {Services} from '@src/screens/Services';
import {Support} from '@src/screens/Support';
import {More} from '@src/screens/More';
import {Footer} from '@src/components/Footer';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  const {user} = useAuth();
  const ref = useNavigationContainerRef();

  const [name, setName] = useState<string | undefined>(undefined);

  // для выделения главной, при загрузке приложения
  useEffect(() => {
    // @ts-ignore
    const timeout = setTimeout(() => setName(ref.getCurrentRoute()?.name), 100);

    // @ts-ignore
    return () => clearTimeout(timeout);
  }, [ref]);

  //для выделения других страниц помимо меню
  useEffect(() => {
    const listener = ref.addListener('state', () =>
      setName(ref.getCurrentRoute()?.name),
    );
    return () => {
      ref.removeListener('state', listener);
    };
  }, []);

  return (
    <>
      <NavigationContainer ref={ref}>
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
      {user && name && <Footer navigate={ref.navigate} currentRoute={name} />}
    </>
  );
};
