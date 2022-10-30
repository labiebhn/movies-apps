import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {useTheme} from '@react-navigation/native';

import {ListMainTheme, ListMainType} from '../../../types/component';
import {fonts} from '../../../utils/fonts';
import {Gap} from '../../layouts';

export interface ListMainProps {
  title?: any;
  description?: any;
  theme?: ListMainTheme;
  type?: ListMainType;
}

const ListMain: FC<ListMainProps> = ({title, description, theme, type}) => {
  const styles = useStyles(theme, type);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Gap width={8} />
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default ListMain;

const useStyles = (theme?: ListMainTheme, type?: ListMainType) => {
  const {colors} = useTheme();
  let titleFont = fonts.p;
  let descriptionFont = fonts.p;
  switch (type) {
    case 'left-bold':
      titleFont = fonts.h7;
      break;
    case 'right-bold':
      descriptionFont = fonts.h7;
      break;
    case 'both-bold':
      titleFont = fonts.h7;
      descriptionFont = fonts.h7;
      break;
    default:
      break;
  }
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      padding: 8,
      backgroundColor: theme === 'card' ? colors.card : 'transparent',
    },
    title: {
      flex: 1,
      ...titleFont,
      color: colors.text,
    },
    description: {
      flex: 1,
      ...descriptionFont,
      color: colors.text,
      textAlign: 'right',
    },
  });
};
