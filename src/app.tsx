import React, {useEffect} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {useTheme} from '@react-navigation/native';

import Routes from './routes';

const App = () => {
  const styles = useStyles();
  const {colors} = useTheme();

  useEffect(() => {
    changeNavigationBarColor('#0A0A0A', true, true);
  }, []);

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

export default gestureHandlerRootHOC(App);

const useStyles = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    container: {},
  });
};
