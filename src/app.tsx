import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {useTheme} from '@react-navigation/native';

import Routes from './routes';

const App = () => {
  const styles = useStyles();
  return (
    <SafeAreaProvider>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'light-content'}
        translucent={true}
      />
      <Routes />
    </SafeAreaProvider>
  );
};

export default App;

const useStyles = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    container: {},
  });
};
