import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, RefreshControl, ScrollView, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {useTheme} from '@react-navigation/native';

import {CardMovie} from '../../../../components/cards';
import {Gap, LoadWrapper, RefreshCustom} from '../../../../components/layouts';
import Navbar from '../../../../components/layouts/navbar';
import {MOVIE} from '../../../../services';
import {PaginationStatus} from '../../../../types/service';
import {InitialState} from '../../../../types/store';
import {fonts} from '../../../../utils/fonts';
import {
  hasNextPage,
  setErrorMessage,
  setImageUrl,
  setPaginationData,
  setPaginationParams
} from '../../../../utils/helpers';
import {HeaderMovieDetail, InfoMovieDetail} from '../../containers';

const MovieDetail = ({navigation, route}: any) => {
  const styles = useStyles();
  const {colors} = useTheme();

  const [detail, setDetail] = useState<InitialState>({
    loading: 'idle',
    data: {},
    message: '',
  });
  const [similar, setSimilar] = useState<InitialState>({
    loading: 'idle',
    data: [],
    pagination: {
      page: 0,
      total_pages: 0,
    },
    message: '',
  });
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getMovieDetail();
    getMovieSimilar('reset');
  }, [route]);

  useEffect(() => {
    const {loading} = detail || similar;
    if (refreshing) {
      if (loading !== 'pending') {
        setRefreshing(false);
      }
    }
  }, [refreshing, detail, similar]);

  const onRefresh = () => {
    getMovieDetail();
    getMovieSimilar('reset');
  };

  const getMovieDetail = useCallback(async () => {
    try {
      if (detail.loading !== 'pending') {
        const {id} = route.params;
        setDetail(prevState => ({...prevState, loading: 'pending'}));
        const result = await MOVIE.getMovieDetail(id);
        setDetail(prevState => ({
          ...prevState,
          loading: 'succeeded',
          data: result.data,
        }));
      }
    } catch (error) {
      setDetail(prevState => ({
        ...prevState,
        loading: 'failed',
        message: setErrorMessage(error),
      }));
    }
  }, [route, detail]);

  const getMovieSimilar = useCallback(
    async (paginate: PaginationStatus) => {
      try {
        if (similar.loading !== 'pending') {
          if (
            hasNextPage(similar.pagination) ||
            paginate === 'reset' ||
            paginate === 'disabled'
          ) {
            setSimilar(prevState => ({...prevState, loading: 'pending'}));
            const {id} = route.params;
            let params = {};
            params = setPaginationParams(params, similar, paginate);
            let response = await MOVIE.getMovieSimilar(id, params);
            const {page, total_pages} = response.data;
            response.data.pagination = {page, total_pages};
            response.data.results = setPaginationData(
              similar.data,
              response.data.results,
              paginate,
            );
            setSimilar(prevState => ({
              ...prevState,
              loading: 'succeeded',
              data: response.data.results,
              pagination: response.data.pagination,
            }));
          }
        }
      } catch (error) {
        setSimilar(prevState => ({
          ...prevState,
          loading: 'failed',
          message: setErrorMessage(error),
        }));
      }
    },
    [route, similar],
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <Navbar title={'Movie Detail'} />
      <LoadWrapper
        loading={detail.loading}
        paginate={'disabled'}
        refreshing={refreshing}>
        <FlatList
          data={similar.data}
          keyExtractor={(item, index) => index?.toString()}
          numColumns={3}
          contentContainerStyle={styles.content}
          columnWrapperStyle={styles.column}
          onEndReachedThreshold={2}
          onEndReached={() => getMovieSimilar('next')}
          refreshControl={
            <RefreshCustom refreshing={refreshing} onRefresh={onRefresh} />
          }
          ListHeaderComponent={
            <>
              <HeaderMovieDetail data={detail.data} />
              <InfoMovieDetail data={detail.data} />
              <Gap height={24} />
              <Text style={styles.title}>Related Movies</Text>
              <Gap height={8} />
            </>
          }
          renderItem={({item, index}) => {
            return (
              <CardMovie
                cover={{uri: setImageUrl(item?.poster_path)}}
                type={'column-list'}
                onPress={() => navigation?.push('movie-detail', {id: item?.id})}
              />
            );
          }}
        />
      </LoadWrapper>
    </SafeAreaView>
  );
};

export default MovieDetail;

const useStyles = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: colors.container,
    },
    title: {
      ...fonts.h4,
      color: colors.text,
      paddingHorizontal: 8,
    },
    content: {
      flexGrow: 1,
    },
    column: {
      paddingHorizontal: 4,
    },
  });
};
