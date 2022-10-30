import React, {FC} from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, useWindowDimensions, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';

import {useTheme} from '@react-navigation/native';

import {CardMovieType} from '../../../types/component';
import {fonts} from '../../../utils/fonts';
import {setImageUrl} from '../../../utils/helpers';

export interface CardMovieProps {
  cover?: any;
  title?: string;
  styleContainer?: any;
  type?: CardMovieType;
  onPress?(): void;
}

const CardMovie: FC<CardMovieProps> = ({
  cover,
  title,
  styleContainer,
  type,
  onPress,
}) => {
  const styles = useStyles(type);
  const {colors} = useTheme();
  return (
    <TouchableWithoutFeedback onPress={onPress}>
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
    </TouchableWithoutFeedback>
  );
};

export default CardMovie;

const useStyles = (type?: CardMovieType) => {
  const {colors} = useTheme();
  const {width} = useWindowDimensions();
  const cardWidth = width / 3 - 8;
  const diffWidthHeight = 75;
  return StyleSheet.create({
    container: {
      width: type === 'column-list' ? cardWidth : 135,
      height: type === 'column-list' ? cardWidth + diffWidthHeight : 210,
      margin: type === 'column-list' ? 4 : 0,
      borderRadius: type === 'column-list' ? 4 : 8,
      overflow: 'hidden',
      backgroundColor: colors.card,
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
