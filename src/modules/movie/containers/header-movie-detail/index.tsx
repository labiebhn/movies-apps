import moment from 'moment';
import React, {FC} from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import FastImage from 'react-native-fast-image';

import {useTheme} from '@react-navigation/native';

import {BadgeTag} from '../../../../components/badges';
import {Gap} from '../../../../components/layouts';
import {fonts} from '../../../../utils/fonts';
import {setImageUrl} from '../../../../utils/helpers';

export interface HeaderMovieDetailProps {
  data?: any;
}

const HeaderMovieDetail: FC<HeaderMovieDetailProps> = ({data}) => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.cover}>
          <FastImage
            source={{uri: setImageUrl(data?.poster_path)}}
            style={styles.cover}
          />
        </View>
        <Gap height={16} />
        <Text style={styles.title}>
          {data?.title}{' '}
          <Text style={styles.description}>
            ∘ {moment(data?.release_date).format('YYYY')}
          </Text>
        </Text>
        {data?.tagline ? (
          <Text style={styles.description}>{data?.tagline}</Text>
        ) : null}
        <View style={styles.tags}>
          {data?.genres?.map((item: any, index: any) => {
            return (
              <View style={styles.tag} key={index?.toString()}>
                <BadgeTag title={item?.name} />
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default HeaderMovieDetail;

const useStyles = () => {
  const {colors} = useTheme();
  const {width, height} = useWindowDimensions();
  return StyleSheet.create({
    container: {
      alignItems: 'center',
      paddingVertical: 24,
    },
    content: {
      width: 280,
    },
    cover: {
      width: '100%',
      height: 435,
      borderRadius: 8,
      overflow: 'hidden',
      backgroundColor: colors.card,
    },
    title: {
      ...fonts.h3,
      color: colors.text,
      textAlign: 'center',
    },
    description: {
      ...fonts.p,
      color: colors.text,
      textAlign: 'center',
    },
    tags: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap',
      paddingVertical: 8,
    },
    tag: {
      margin: 4,
    },
  });
};
