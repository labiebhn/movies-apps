import moment from 'moment';
import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {useTheme} from '@react-navigation/native';

import {Gap} from '../../../../components/layouts';
import {ListMain} from '../../../../components/lists';
import {fonts} from '../../../../utils/fonts';
import {setCurrency} from '../../../../utils/helpers';

export interface InfoMovieDetailProps {
  data?: any;
}

const InfoMovieDetail: FC<InfoMovieDetailProps> = ({data}) => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Overview</Text>
      <Gap height={8} />
      <Text style={styles.overview}>{data?.overview}</Text>
      <Gap height={16} />
      <Text style={styles.title}>Detail</Text>
      <Gap height={8} />
      <ListMain
        theme={'card'}
        title={'Production Companies'}
        description={data?.production_companies
          ?.map((item: any) => item?.name)
          ?.join(', ')}
      />
      <ListMain
        title={'Release Date'}
        description={moment(data?.release_date).format('DD MMMM YYYY')}
      />
      <ListMain
        theme={'card'}
        title={'Revenue'}
        description={`$${setCurrency(data?.revenue)}`}
      />
      <ListMain title={'Popularity'} description={data?.popularity} />
      <ListMain theme={'card'} title={'Runtime'} description={data?.runtime} />
      <ListMain
        title={'Spoken Language'}
        description={data?.spoken_languages
          ?.map((item: any) => item?.english_name)
          ?.join(', ')}
      />
      <ListMain theme={'card'} title={'Status'} description={data?.status} />
      <ListMain title={'Vote Count'} description={data?.vote_count} />
      <ListMain
        theme={'card'}
        title={'Vote Average'}
        description={data?.vote_average}
      />
    </View>
  );
};

export default InfoMovieDetail;

const useStyles = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    container: {},
    title: {
      ...fonts.h4,
      color: colors.text,
      paddingHorizontal: 8,
    },
    overview: {
      ...fonts.p,
      color: colors.text,
      paddingHorizontal: 8,
      textAlign: 'justify',
    },
  });
};
