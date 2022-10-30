import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';

import {useTheme} from '@react-navigation/native';

import {fonts} from '../../../utils/fonts';
import {setImageUrl} from '../../../utils/helpers';

export interface CardMovieProps {
  cover?: any;
  title?: string;
  styleContainer?: any;
}

const CardMovie: FC<CardMovieProps> = ({cover, title, styleContainer}) => {
  const styles = useStyles();
  const {colors} = useTheme();
  return (
    <View style={[styles.container, styleContainer]}>
      <FastImage source={cover} style={styles.image} />
      {title ? (
        <LinearGradient colors={colors.gradientCard} style={styles.content}>
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
        </LinearGradient>
      ) : null}
    </View>
  );
};

export default CardMovie;

const useStyles = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    container: {
      width: 135,
      height: 210,
      borderRadius: 8,
      overflow: 'hidden',
    },
    image: {
      flex: 1,
    },
    content: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      justifyContent: 'flex-end',
      padding: 8,
    },
    title: {
      ...fonts.h6,
      color: colors.text,
    },
  });
};
