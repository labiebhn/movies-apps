import React, {FC, useEffect} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {shallowEqual} from 'react-redux';

import {useTheme} from '@react-navigation/native';

import {CardMovie} from '../../../../components/cards';
import {Gap} from '../../../../components/layouts';
import {useAppDispatch, useAppSelector} from '../../../../store/hooks';
import {CollectionMovieType} from '../../../../types/container';
import {PaginationStatus} from '../../../../types/service';
import {fonts} from '../../../../utils/fonts';
import {setImageUrl} from '../../../../utils/helpers';
import {getMoviePopular, getMovieTopRated} from '../../store/movieThunk';

export interface CollectionMovieProps {
  title?: string;
  type: CollectionMovieType;
}

const CollectionMovie: FC<CollectionMovieProps> = ({type, title}) => {
  const styles = useStyles();
  const dispatch = useAppDispatch();
  const state = useAppSelector(state => state.movie[type], shallowEqual);

  useEffect(() => {
    handleGetData('reset');
  }, []);

  const handleGetData = (paginate: PaginationStatus) => {
    let params = {};
    switch (type) {
      case 'topRated':
        dispatch(getMovieTopRated({params, paginate}));
        break;
      case 'popular':
        dispatch(getMoviePopular({params, paginate}));
        break;
      default:
        break;
    }
  };

  const onEndReached = () => {
    if (state.loading !== 'pending') {
      handleGetData('next');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Gap height={8} />
      <FlatList
        data={state.data || []}
        keyExtractor={(item, index) => index?.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        onEndReachedThreshold={4}
        onEndReached={onEndReached}
        renderItem={({item, index}) => {
          return (
            <View style={styles.list}>
              <CardMovie cover={{uri: setImageUrl(item?.poster_path)}} />
            </View>
          );
        }}
      />
    </View>
  );
};

export default CollectionMovie;

const useStyles = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    container: {},
    title: {
      ...fonts.h4,
      color: colors.text,
      paddingHorizontal: 8,
    },
    list: {
      marginHorizontal: 8,
    },
  });
};
