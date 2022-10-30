import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {shallowEqual} from 'react-redux';

import {useTheme} from '@react-navigation/native';

import {CarouselMovie} from '../../../../components/carousels';
import {LoadWrapper} from '../../../../components/layouts';
import {useAppDispatch, useAppSelector} from '../../../../store/hooks';
import {fonts} from '../../../../utils/fonts';
import {setCarouselMovieData} from '../../../../utils/mapping';
import {getMovieBanner} from '../../store/movieThunk';

const HeaderMovieList = () => {
  const styles = useStyles();
  const dispatch = useAppDispatch();
  const banner = useAppSelector(state => state.movie.banner, shallowEqual);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    handleGetBanner();
  }, []);

  const handleGetBanner = () => {
    dispatch(getMovieBanner());
  };

  return (
    <View style={styles.container}>
      <LoadWrapper loading={banner.loading}>
        <CarouselMovie
          data={setCarouselMovieData(banner.data)}
          onSnapToItem={setCurrentIndex}
        />
        <View style={styles.info}>
          <Text style={styles.description} numberOfLines={2}>
            {banner.data?.[currentIndex]?.overview}
          </Text>
        </View>
      </LoadWrapper>
    </View>
  );
};

export default HeaderMovieList;

const useStyles = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    container: {
      paddingVertical: 16,
    },
    info: {
      alignItems: 'center',
    },
    description: {
      ...fonts.p,
      color: colors.text,
      textAlign: 'center',
      width: '80%',
    },
  });
};
