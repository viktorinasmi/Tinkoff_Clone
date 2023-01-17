/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {AuthProvider} from '@src/providers/AuthProvider';
import {Navigation} from '@src/components/Navigation';
import {LogBox} from 'react-native';

export const App = () => {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
};

// LogBox.ignoreAllLogs();
