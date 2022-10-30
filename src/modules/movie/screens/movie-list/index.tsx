import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {useTheme} from '@react-navigation/native';

const MovieList = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Text>MovieList</Text>
    </View>
  );
};

export default MovieList;

const useStyles = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    container: {},
  });
};
