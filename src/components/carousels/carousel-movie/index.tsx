import React, {FC} from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-reanimated-carousel';

import {useTheme} from '@react-navigation/native';

import {fonts} from '../../../utils/fonts';

export interface CarouselMovieProps {
  data: any[];
  onSnapToItem?(index: number): void;
}

const CarouselMovie: FC<CarouselMovieProps> = ({data, onSnapToItem}) => {
  const styles = useStyles();
  const {colors} = useTheme();
  const {width} = useWindowDimensions();
  return (
    <View style={styles.container}>
      <Carousel
        loop
        width={width}
        height={width / 1.8}
        autoPlay={true}
        autoPlayInterval={3500}
        pagingEnabled={true}
        data={data}
        scrollAnimationDuration={1000}
        onSnapToItem={onSnapToItem}
        mode={'parallax'}
        renderItem={({item, index}) => {
          return (
            <View style={styles.card}>
              <FastImage source={item?.path} style={styles.image} />
              {item?.title ? (
                <LinearGradient
                  colors={colors.gradientCard}
                  style={styles.content}>
                  <Text style={styles.title} numberOfLines={2}>
                    {item?.title}
                  </Text>
                </LinearGradient>
              ) : null}
            </View>
          );
        }}
      />
    </View>
  );
};

export default CarouselMovie;

const useStyles = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    container: {},
    card: {
      flex: 1,
      justifyContent: 'center',
      borderRadius: 8,
      marginHorizontal: 8,
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
      padding: 12,
    },
    title: {
      ...fonts.h3,
      color: colors.text,
    },
  });
};
