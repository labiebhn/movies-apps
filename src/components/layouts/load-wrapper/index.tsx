import React, {FC, ReactNode} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

import {useTheme} from '@react-navigation/native';

import {LoadWrapperType} from '../../../types/component';
import {LoadingType, PaginationStatus} from '../../../types/service';
import {SkeletonMain} from '../../loaders';

export interface LoadWrapperProps {
  loading: LoadingType;
  type?: LoadWrapperType;
  paginate?: PaginationStatus;
  number?: number;
  refreshing?: boolean | undefined;
  children: ReactNode;
}

const LoadWrapper: FC<LoadWrapperProps> = ({
  loading,
  paginate,
  type,
  number = 3,
  refreshing,
  children,
}) => {
  const styles = useStyles();

  const renderList = (loader: ReactNode): ReactNode => {
    let arr = new Array(number).fill(0);
    return arr.map((item, index) => {
      return (
        <View key={index?.toString()} style={styles.list}>
          {loader}
        </View>
      );
    });
  };

  const renderLoader = () => {
    switch (type) {
      default:
        return (
          <View style={styles.container}>
            <SkeletonMain />
          </View>
        );
    }
  };

  const renderRoot = () => {
    if (loading === 'pending') {
      if (paginate) {
        if (paginate === 'reset' && !refreshing) {
          return renderLoader();
        } else {
          return children;
        }
      } else {
        return renderLoader();
      }
    } else {
      return children;
    }
  };

  return <>{renderRoot()}</>;
};

export default LoadWrapper;

const useStyles = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    list: {
      marginBottom: 12,
    },
  });
};
