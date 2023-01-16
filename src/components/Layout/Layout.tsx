import React, {ReactNode} from 'react';
import {ScrollView, View} from 'react-native';
import {styles} from './Layout.styles';

interface LayoutProps {
  children: ReactNode;
  isScrollView?: boolean;
}

export const Layout = ({children, isScrollView = true}: LayoutProps) => {
  return (
    <View style={styles.container}>
      {isScrollView ? <ScrollView>{children}</ScrollView> : children}
    </View>
  );
};
