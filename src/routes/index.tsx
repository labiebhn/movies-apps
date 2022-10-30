import React, {createRef, useEffect} from 'react';
import {Platform, useColorScheme} from 'react-native';

import {NavigationContainer, NavigationContainerRef} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp
} from '@react-navigation/native-stack';

import {fontFamily, fonts} from '../utils/fonts';
import {themes} from '../utils/themes';
import {routes} from './routes';

const Stack = createNativeStackNavigator();

export const navigationRef = createRef<NavigationContainerRef<{}>>();

export type NavigationProps = NativeStackNavigationProp<{}>;

const Routes = () => {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? themes.dark : themes.default;
  const {colors} = theme;

  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      <Stack.Navigator
        screenOptions={{
          animation: Platform.OS === 'android' ? 'slide_from_right' : 'default',
          headerStyle: {backgroundColor: colors.container},
          headerTitleStyle: {
            ...fonts.h4,
            fontFamily: fontFamily.Poppins.regular,
            fontWeight: '500',
            color: colors.text,
          },
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,
          contentStyle: {backgroundColor: colors.container},
        }}>
        {routes.map(item => (
          <Stack.Screen
            key={item.key}
            name={item.key}
            component={item.component}
            options={{...item.options}}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
