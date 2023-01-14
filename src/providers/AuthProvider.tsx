import React, {createContext, FC, useEffect, useMemo, useState} from 'react';
import {User, onAuthStateChanged} from 'firebase/auth';
import {Alert} from 'react-native';
import {addDoc, collection} from 'firebase/firestore';
import {auth, db, login, logout, register} from '@src/firebase';

interface IContext {
  user: User | null;
  isLoading: boolean;
  register: (email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider: FC<any> = ({children}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoadingInitial, setIsLoadingInitial] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const registerHandler = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const {user} = await register(email, password);

      await addDoc(collection(db, 'users'), {
        _id: user.uid,
        displayName: 'No name',
      });
    } catch (error) {
      Alert.alert('Error reg:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const loginHandler = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      await login(email, password);
    } catch (error) {
      Alert.alert('Error login:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const logoutHandler = async () => {
    setIsLoading(true);
    try {
      await logout();
    } catch (error) {
      Alert.alert('Error logout:', error);
    } finally {
      setIsLoading(false);
    }
  };

  //application state change
  useEffect(
    () =>
      // eslint-disable-next-line @typescript-eslint/no-shadow
      onAuthStateChanged(auth, user => {
        setUser(user || null);
        setIsLoadingInitial(false);
      }),
    [],
  );

  const value = useMemo(
    () => ({
      user,
      isLoading,
      login: loginHandler,
      logout: logoutHandler,
      register: registerHandler,
    }),
    [user, isLoading],
  );

  return (
    <AuthContext.Provider value={value}>
      {!isLoadingInitial && children}
    </AuthContext.Provider>
  );
};
