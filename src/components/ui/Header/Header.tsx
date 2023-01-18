import React from 'react';
import {Padding} from '@src/components/ui/Padding';
import {Avatar} from '@src/components/ui/Avatar';
import {TouchableOpacity, Text, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './Header.styles';
import {useProfile} from '@src/hooks/useProfile';
import {Loader} from '@src/components/ui/Loader';

export const Header = () => {
  const {isLoading} = useProfile();
  const {navigate} = useNavigation();

  // @ts-ignore
  return isLoading ? (
    <Loader />
  ) : (
    <Padding>
      {/*<Avatar name={name} />*/}
      <Avatar name={'Vika'} />
      <TouchableOpacity
        style={styles.touchableAvatar}
        onPress={() => navigate('Profile')}>
        {/*<Text style={styles.headerText}>{name}</Text>*/}
        <Text style={styles.headerText}>{'Vika'}</Text>
        <Image
          style={styles.headerIcon}
          source={require('../../../../public/icons/chevron_right.png')}
        />
      </TouchableOpacity>
    </Padding>
  );
};
