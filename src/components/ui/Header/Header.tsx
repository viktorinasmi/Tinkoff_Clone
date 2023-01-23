import React from 'react';
import {Avatar} from '@src/components/ui/Avatar';
import {TouchableOpacity, Text, Image, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './Header.styles';
import {useProfile} from '@src/hooks/useProfile';
import {Loader} from '@src/components/ui/Loader';

export const Header = () => {
  const {isLoading, name} = useProfile();
  const {navigate} = useNavigation();

  // @ts-ignore
  return isLoading ? (
    <Loader />
  ) : (
    <View style={styles.container}>
      <Avatar name={name} />
      <TouchableOpacity
        style={styles.touchableAvatar}
        onPress={() => {
          navigate('Profile');
        }}>
        <Text style={styles.headerText}>{name}</Text>
        <Image
          style={styles.headerIcon}
          source={require('../../../../public/icons/chevron_right.png')}
        />
      </TouchableOpacity>
    </View>
  );
};
