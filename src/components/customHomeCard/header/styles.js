import {StyleSheet} from 'react-native';
import {normalize} from '../../../utils/dimensions';

export const postHeaderStyles = StyleSheet.create({
  container: {
    marginHorizontal: normalize(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: normalize(40),
  },

  imageStyle: {
    width: normalize(40),
    height: normalize(40),
    borderRadius: normalize(50),
  },

  postStyle: {
    alignSelf: 'center',
    resizeMode: 'contain',
    // backgroundColor: 'red',
  },

  menuIconStyle: {
    height: normalize(16),
    width: normalize(16),
  },

  commonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  nameStyle: {
    marginLeft: normalize(10),
  },
});
