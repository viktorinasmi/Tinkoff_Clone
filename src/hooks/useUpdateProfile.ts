import {useState} from 'react';
import {useAuth} from '@src/hooks/useAuth';
import {Alert} from 'react-native';
import {doc, updateDoc} from 'firebase/firestore';
import {db} from '@src/firebase';

interface IUseUpdateProfile {
  name: string;
  docId: string;
}

export const useUpdateProfile = ({name, docId}: IUseUpdateProfile) => {
  const {user} = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false); //проверка обновления данных

  const updateProfile = async () => {
    setIsLoading(true);

    if (!user) {
      return;
    }

    try {
      const docRef = doc(db, 'users', docId);

      await updateDoc(docRef, {
        displayName: name,
      });
      setIsSuccess(true);

      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    } catch (error: any) {
      Alert.alert('Error update profile', error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return {isLoading, updateProfile, isSuccess};
};
