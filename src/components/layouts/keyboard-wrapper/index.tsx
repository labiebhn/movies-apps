import React, {FC, ReactNode} from 'react';
import {
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {useTheme} from '@react-navigation/native';

export interface KeyboardWrapperProps extends KeyboardAvoidingViewProps {
  children: ReactNode;
}

const KeyboardWrapper: FC<KeyboardWrapperProps> = props => {
  const styles = useStyles();
  const {children} = props;
  if (Platform.OS === 'ios') {
    return <KeyboardAvoidingView {...props}>{children}</KeyboardAvoidingView>;
  } else {
    return <View {...props}>{children}</View>;
  }
};

export default KeyboardWrapper;

const useStyles = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    container: {},
  });
};
