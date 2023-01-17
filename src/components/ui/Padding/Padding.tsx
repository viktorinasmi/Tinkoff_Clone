import {View} from 'react-native';
import {styles} from './Padding.styles';
import {ReactNode} from 'react';

interface IPadding {
  children: ReactNode;
}

export const Padding = ({children}: IPadding) => {
  return <View style={styles.container}>{children}</View>;
};
