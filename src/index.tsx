import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {useTheme} from '@react-navigation/native';

const Root = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Text>Root</Text>
    </View>
  );
};

export default Root;

const useStyles = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    container: {},
  });
};
