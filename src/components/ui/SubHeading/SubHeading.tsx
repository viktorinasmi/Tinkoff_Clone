import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './SubHeading.styles';

interface ISubHeading {
  text: string;
}
export const SubHeading = ({text}: ISubHeading) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};
