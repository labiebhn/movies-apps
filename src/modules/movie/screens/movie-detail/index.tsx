import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {useTheme} from '@react-navigation/native';

const MovieDetail = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Text>MovieDetail</Text>
    </View>
  );
};

export default MovieDetail;

const useStyles = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    container: {},
  });
};
