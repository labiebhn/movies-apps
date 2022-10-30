import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {useTheme} from '@react-navigation/native';

const MovieList = () => {
  const styles = useStyles();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text>MovieList</Text>
      </View>
    </SafeAreaView>
  );
};

export default MovieList;

const useStyles = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: colors.container,
    },
    container: {
      flex: 1,
    },
  });
};
