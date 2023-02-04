import {StyleSheet} from 'react-native';
import {normalize, SCREEN_WIDTH} from '../../utils/dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    // backgroundColor: 'red',
    height: 100,
  },
  progressBaar: {
    width: SCREEN_WIDTH,
    height: normalize(2),
    borderRadius: normalize(2),
    backgroundColor: 'grey',
  },
});
