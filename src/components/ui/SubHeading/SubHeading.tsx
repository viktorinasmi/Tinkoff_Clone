import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './SubHeading.styles';

interface IHeading {
  text: string;
}
export const SubHeading = ({text}: IHeading) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>;
    </View>
  );
};
