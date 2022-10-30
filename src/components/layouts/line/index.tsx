import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {useTheme} from '@react-navigation/native';

export interface LineProps {
  width?: any;
  height?: any;
}

const Line: FC<LineProps> = ({width = '100%', height = 1}) => {
  const styles = useStyles(width, height);
  return <View style={styles.container} />;
};

export default Line;

const useStyles = (width: any, height: any) => {
  const {colors} = useTheme();
  return StyleSheet.create({
    container: {
      backgroundColor: colors.border,
      width: width,
      height: height,
    },
  });
};
