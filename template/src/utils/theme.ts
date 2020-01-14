import {StyleSheet} from 'react-native';
import tv from './theme.variables';

export const generateStyleSheet = (variables: any) => {
  const sheet = StyleSheet.create({
    defaultText: {
      fontSize: variables.FONT_SIZE_SMALL,
      fontFamily: variables.FF_RUBIK_MEDIUM,
    },
    largeButtonText: {
      fontSize: variables.FONT_SIZE_LARGE,
      fontWeight: variables.FONT_WEIGHT_HEAVY,
    },
    largeHeaderText: {
      fontSize: variables.FONT_SIZE_LARGE,
    },
    mediumHeaderText: {
      fontSize: variables.FONT_SIZE_MEDIUM,
      color: variables.PRIMARY_COLOR,
    },
    defaultContainer: {
      backgroundColor: variables.BACKGROUND_COLOR,
    },
    // ...
  });
  return sheet;
};

export default StyleSheet.create({
  defaultText: {
    fontSize: tv.FONT_SIZE_SMALL,
    fontFamily: tv.FF_RUBIK_MEDIUM,
  },
  largeButtonText: {
    fontSize: tv.FONT_SIZE_LARGE,
    fontWeight: tv.FONT_WEIGHT_HEAVY,
  },
  largeHeaderText: {
    fontSize: tv.FONT_SIZE_LARGE,
  },
  mediumHeaderText: {
    fontSize: tv.FONT_SIZE_MEDIUM,
    color: tv.PRIMARY_COLOR,
  },
  // ...
});
