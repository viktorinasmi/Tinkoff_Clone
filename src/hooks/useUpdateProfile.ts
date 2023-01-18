import React, {useState} from 'react';
import {useAuth} from '@src/hooks/useAuth';

export const useUpdateProfile = () => {
  const {user} = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false); //проверка обновления данных

  const updateProfile = async () => {
    setIsLoading(true);
    try {
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };
};
