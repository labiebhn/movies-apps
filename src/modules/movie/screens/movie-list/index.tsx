import React, {useEffect} from 'react';
import {FlatList, StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {useTheme} from '@react-navigation/native';

import {CardMovie} from '../../../../components/cards';
import {Gap} from '../../../../components/layouts';
import {useAppDispatch, useAppSelector} from '../../../../store/hooks';
import {PaginationStatus} from '../../../../types/service';
import {fonts} from '../../../../utils/fonts';
import {setImageUrl} from '../../../../utils/helpers';
import {HeaderMovieList} from '../../containers';
import CollectionMovie from '../../containers/collection-movie';
import {getMovieOther} from '../../store/movieThunk';

const MovieList = ({navigation}: any) => {
  const styles = useStyles();
  const dispatch = useAppDispatch();
  const movieOther = useAppSelector(state => state.movie.other);

  useEffect(() => {
    handleGetMovieOther('reset');
  }, []);

  const handleGetMovieOther = (paginate: PaginationStatus) => {
    let params = {};
    dispatch(getMovieOther({params, paginate}));
  };

  const onEndReached = () => {
    if (movieOther.loading !== 'pending') {
      handleGetMovieOther('next');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={movieOther.data}
        keyExtractor={(item, index) => index?.toString()}
        numColumns={3}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        onEndReachedThreshold={2}
        onEndReached={onEndReached}
        ListHeaderComponent={
          <>
            <HeaderMovieList />
            <Gap height={16} />
            <CollectionMovie type={'popular'} title={'Popular'} />
            <Gap height={24} />
            <CollectionMovie type={'topRated'} title={'Top Rated'} />
            <Gap height={24} />
            <Text style={styles.title}>Movies</Text>
            <Gap height={8} />
          </>
        }
        ListFooterComponent={<Gap height={24} />}
        renderItem={({item, index}) => {
          return (
            <View style={styles.list}>
              <CardMovie
                cover={{uri: setImageUrl(item?.poster_path)}}
                styleContainer={styles.card}
              />
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default MovieList;

const useStyles = () => {
  const {colors} = useTheme();
  const {width} = useWindowDimensions();
  const cardWidth = width / 3 - 8;
  const diffWidthHeight = 75;
  return StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: colors.container,
    },
    content: {
      flexGrow: 1,
    },
    column: {
      paddingHorizontal: 4,
    },
    list: {
      margin: 4,
    },
    card: {
      width: cardWidth,
      height: cardWidth + diffWidthHeight,
    },
    title: {
      ...fonts.h4,
      color: colors.text,
      paddingHorizontal: 8,
    },
  });
};
