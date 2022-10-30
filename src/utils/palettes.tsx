import {Platform} from 'react-native';

export const palettes = {
  default: {
    primary: '#f01d01',
    secondary: '#FFC300',
    warning: '#FFAD00',
    success: '#029c0f',
    danger: '#E21D0F',
    container: '#0A0A0A',
    text: '#fafafa',
    textSecondary: '#0A0A0A',
    textInactive: '#808C92',
    textPlaceholder: '#C4C4C4',
    textError: '#EE3124',
    border: '#DEE3ED',
    divider: '#F1F3F7',
    card: '#F6F9FC',
    overlay: '#00000018',
    gradientCard: ['#0A0A0A00', '#0A0A0A20', '#0A0A0A80'],
    elevationLow: Platform.Version >= 30 ? 5 : 1.5,
    elevationMedium: Platform.Version >= 30 ? 8 : 2.5,
  },
  dark: {
    primary: '#f01d01',
    secondary: '#FFC300',
    warning: '#FFAD00',
    success: '#029c0f',
    danger: '#E21D0F',
    container: '#0A0A0A',
    text: '#fafafa',
    textSecondary: '#0A0A0A',
    textInactive: '#808C92',
    textPlaceholder: '#C4C4C4',
    textError: '#EE3124',
    border: '#DEE3ED',
    divider: '#F1F3F7',
    card: '#F6F9FC',
    overlay: '#00000018',
    gradientCard: ['#0A0A0A00', '#0A0A0A20', '#0A0A0A80'],
    elevationLow: Platform.Version >= 30 ? 5 : 1.5,
    elevationMedium: Platform.Version >= 30 ? 8 : 2.5,
  },
};
