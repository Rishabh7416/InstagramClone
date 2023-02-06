import {StyleSheet} from 'react-native';
import {normalize} from '../../../utils/dimensions';

export const postFooterStyles = StyleSheet.create({
  container: {
    marginHorizontal: normalize(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: normalize(40),
  },

  postStyle: {
    alignSelf: 'center',
    resizeMode: 'contain',
    // backgroundColor: 'red',
  },

  likeIconStyle: {
    height: normalize(20),
    width: normalize(20),
    // marginRight: normalize(7),
  },

  commentIconStyle: {
    height: normalize(25),
    width: normalize(25),
    // marginRight: normalize(7),
  },

  messageIconStyle: {
    height: normalize(18),
    width: normalize(18),
  },

  saveIconStyle: {
    height: normalize(20),
    width: normalize(20),
  },

  commonStyle: {
    // backgroundColor: 'red',
    width: '25%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
});
