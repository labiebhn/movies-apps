import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {useTheme} from '@react-navigation/native';

import {Gap} from '../../../../components/layouts';
import {HeaderMovieList} from '../../containers';
import CollectionMovie from '../../containers/collection-movie';

const MovieList = ({navigation}: any) => {
  const styles = useStyles();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <FlatList
          data={[]}
          keyExtractor={(item, index) => index?.toString()}
          ListHeaderComponent={
            <>
              <HeaderMovieList />
              <Gap height={16} />
              <CollectionMovie type={'popular'} title={'Popular'} />
              <Gap height={24} />
              <CollectionMovie type={'topRated'} title={'Top Rated'} />
            </>
          }
          ListFooterComponent={<Gap height={24} />}
          renderItem={({item, index}) => {
            return <View />;
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default MovieList;

const useStyles = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: colors.container,
    },
    container: {
      flex: 1,
    },
  });
};
