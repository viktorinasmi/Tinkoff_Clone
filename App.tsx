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
import {DataProvider} from '@src/providers/DataProvider';
import {StoryContainer} from '@src/components/ui/Stories/StoryContainer';

export const App = () => {
  return (
    <AuthProvider>
      <DataProvider>
        <StoryContainer />
        <Navigation />
      </DataProvider>
    </AuthProvider>
  );
};

// LogBox.ignoreAllLogs();
