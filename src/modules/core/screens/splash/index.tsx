import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import {useTheme} from '@react-navigation/native';

import {fonts} from '../../../../utils/fonts';

const Splash = ({navigation}: any) => {
  const styles = useStyles();

  useEffect(() => {
    navigation?.replace('movie-list');
    SplashScreen.hide();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movie Apps</Text>
    </View>
  );
};

export default Splash;

const useStyles = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.container,
    },
    title: {
      ...fonts.h2,
      color: colors.text,
    },
  });
};
