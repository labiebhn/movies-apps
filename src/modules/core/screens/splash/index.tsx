import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {useTheme} from '@react-navigation/native';

import {fonts} from '../../../../utils/fonts';

const Splash = () => {
  const styles = useStyles();
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
