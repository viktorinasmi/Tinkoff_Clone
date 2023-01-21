import {ImageBackground, Text} from 'react-native';
import {FC} from 'react';
import {IAccount} from '@src/components/Accounts/types';
import {styles} from './ImageCard.styles';

export const ImageCard: FC<{account: IAccount}> = ({
  account: {name, cardNumber},
}) => {
  let ImageSourcePropType;
  const imageBlack =
    (ImageSourcePropType = require('@public/icons/cards/tinkoffBlack.png'));
  const imageAirlines =
    (ImageSourcePropType = require('@public/icons/cards/tinkofAirlines.png'));

  return (
    <ImageBackground
      source={name === 'Tinkoff Black' ? imageBlack : imageAirlines}
      resizeMode={'contain'}
      style={styles.container}>
      <Text style={styles.cardNumber}>{cardNumber.slice(-4)}</Text>
    </ImageBackground>
  );
};
