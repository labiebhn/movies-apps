import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import {useTheme} from '@react-navigation/native';

const Gap = ({height = 0, width = 0, borderRadius = 4, isSkeleton = false}) => {
  const styles = useStyles();
  const {colors} = useTheme();

  return isSkeleton ? (
    <SkeletonPlaceholder
      backgroundColor={colors.container}
      highlightColor={colors.card}>
      <View style={{height, width, borderRadius}} />
    </SkeletonPlaceholder>
  ) : (
    <View style={{height, width}} />
  );
};

export default Gap;

const useStyles = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    container: {},
  });
};
