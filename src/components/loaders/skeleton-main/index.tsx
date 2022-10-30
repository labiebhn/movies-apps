import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {useTheme} from '@react-navigation/native';

import {Gap} from '../../layouts';

const SkeletonMain = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Gap width={140} height={12} isSkeleton />
      <Gap height={8} />
      <Gap width={220} height={12} isSkeleton />
      <Gap height={8} />
      <Gap width={80} height={12} isSkeleton />
    </View>
  );
};

export default SkeletonMain;

const useStyles = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    container: {},
  });
};
