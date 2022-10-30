import {Platform} from 'react-native';

export const fontFamily = {
  Poppins: {
    light: 'Poppins-Light',
    regular: 'Poppins-Regular',
    medium: 'Poppins-Medium',
    bold: 'Poppins-Bold',
    boldItalic: 'Poppins-BoldItalic',
  },
};

const familyDefault = fontFamily.Poppins;
const marginBottom = Platform.OS === 'android' ? -2 : 0;

export const fonts = {
  banner1: {
    fontSize: 78,
    fontFamily: familyDefault.bold,
    marginBottom,
  },
  banner2: {
    fontSize: 54,
    fontFamily: familyDefault.bold,
    marginBottom,
  },
  h1: {
    fontSize: 36,
    fontFamily: familyDefault.bold,
    marginBottom,
  },
  h2: {
    fontSize: 27,
    fontFamily: familyDefault.bold,
    marginBottom,
  },
  h3: {
    fontSize: 22,
    fontFamily: familyDefault.bold,
    marginBottom,
  },
  h4: {
    fontSize: 18,
    fontFamily: familyDefault.bold,
    marginBottom,
  },
  h5: {
    fontSize: 16,
    fontFamily: familyDefault.bold,
    marginBottom,
  },
  h6: {
    fontSize: 14,
    fontFamily: familyDefault.bold,
    marginBottom,
  },
  h7: {
    fontSize: 12,
    fontFamily: familyDefault.bold,
    marginBottom,
  },
  label: {
    fontSize: 12,
    fontFamily: familyDefault.medium,
    marginBottom,
  },
  p: {
    fontSize: 12,
    fontFamily: familyDefault.regular,
    marginBottom,
  },
  small: {
    fontSize: 10,
    fontFamily: familyDefault.regular,
    marginBottom,
  },
  placeholder: {
    fontSize: 12,
    fontFamily: familyDefault.regular,
    marginBottom,
  },
  btn: {
    fontSize: 12,
    fontFamily: familyDefault.medium,
    marginBottom,
  },
  btn1: {
    fontSize: 12,
    fontFamily: familyDefault.bold,
    marginBottom,
  },
  input: {
    fontSize: 12,
    fontFamily: familyDefault.regular,
  },
};
