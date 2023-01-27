import {useEffect, useState} from 'react';
import {ICurrency} from '@src/components/ui/Currencies/types';
import {Alert} from 'react-native';
import {URL} from '@src/components/ui/Currencies/API';

export const useCurrencies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currencies, setCurrencies] = useState<ICurrency[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${URL}&base_currency=RUB`);
        const result = await response.json(); //обязательно

        setCurrencies([
          {
            name: 'USD',
            value: (1 / result.data.USD).toFixed(2),
          },
          {
            name: 'EUR',
            value: (1 / result.data.EUR).toFixed(2),
          },
          {
            name: 'GBP',
            value: (1 / result.data.GBP).toFixed(2),
          },
        ]);
      } catch (error: any) {
        Alert.alert('Fetch currencies', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return {isLoading, currencies};
};
