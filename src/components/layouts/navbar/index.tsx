import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {useNavigation, useTheme} from '@react-navigation/native';

import {IconBack} from '../../../assets';
import {fontFamily, fonts} from '../../../utils/fonts';
import ButtonIcon from '../../buttons/button-icon';
import Gap from '../gap';

export interface NavbarProps {
  title?: string;
  transculent?: boolean;
}

const Navbar: FC<NavbarProps> = ({title, transculent}) => {
  const styles = useStyles(transculent);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {navigation?.canGoBack() ? (
        <>
          <ButtonIcon
            icon={<IconBack width={32} height={32} />}
            style={styles.btnBack}
            onPress={() => navigation?.goBack()}
          />
          <Gap width={16} />
        </>
      ) : null}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Navbar;

const useStyles = (transculent?: boolean) => {
  const {colors} = useTheme();
  let transculentStyle = {
    top: useSafeAreaInsets().top,
    left: 0,
    backgroundColor: 'transparent',
    zIndex: 5,
    borderBottomWidth: 0,
  };
  return StyleSheet.create({
    container: {
      padding: 16,
      paddingVertical: 10,
      backgroundColor: colors.container,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
      flexDirection: 'row',
      alignItems: 'center',
      position: transculent ? 'absolute' : 'relative',
      ...(transculent ? transculentStyle : {}),
    },
    btnBack: {
      padding: 0,
      marginLeft: -4,
    },
    title: {
      flex: 1,
      ...fonts.h4,
      fontFamily: fontFamily.Poppins.regular,
      color: colors.text,
    },
  });
};
