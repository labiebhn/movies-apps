import React, {FC} from 'react';
import {RefreshControl, RefreshControlProps} from 'react-native';

import {useTheme} from '@react-navigation/native';

export interface RefreshCustomProps extends RefreshControlProps {}

const RefreshCustom: FC<RefreshCustomProps> = props => {
  const {colors} = useTheme();
  return (
    <RefreshControl
      {...props}
      tintColor={colors.primary}
      progressBackgroundColor={colors.container}
      colors={[colors.primary]}
    />
  );
};

export default RefreshCustom;
