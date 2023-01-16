import React from 'react';
import {ActivityIndicator} from 'react-native';
import {styles} from './Loader.styles';

export const Loader = () => {
  return <ActivityIndicator style={styles.indicator} size="large" />;
};
