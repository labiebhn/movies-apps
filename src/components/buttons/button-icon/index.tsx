import React, {FC, ReactNode} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
  View
} from 'react-native';

import {useTheme} from '@react-navigation/native';

export interface ButtonIconProps extends TouchableWithoutFeedbackProps {
  icon: ReactNode;
}

const ButtonIcon: FC<ButtonIconProps> = props => {
  const {icon, style} = props;
  const styles = useStyles();
  return (
    <TouchableWithoutFeedback {...props}>
      <View style={[styles.container, style]}>{icon}</View>
    </TouchableWithoutFeedback>
  );
};

export default ButtonIcon;

const useStyles = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    container: {
      padding: 8,
    },
  });
};
