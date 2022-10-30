import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {useTheme} from '@react-navigation/native';

import {fonts} from '../../../utils/fonts';

export interface BadgeTagProps {
  title?: string;
}

const BadgeTag: FC<BadgeTagProps> = ({title}) => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default BadgeTag;

const useStyles = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    container: {
      padding: 8,
      backgroundColor: colors.card,
      borderRadius: 4,
    },
    title: {
      ...fonts.p,
      color: colors.primary,
    },
  });
};
