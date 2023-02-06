import {StyleSheet} from 'react-native';
import {normalize} from '../../../utils/dimensions';

export const reelFooterStyle = StyleSheet.create({
  container: {
    // height: normalize(50),
    flexDirection: 'row',
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },

  innerContainer: {
    justifyContent: 'space-between',
  },

  shareIconStyle: {
    height: normalize(22),
    width: normalize(22),
  },

  shareContainer: {
    width: normalize(50),
    alignItems: 'center',
    justifyContent: 'center',
  },

  likeContainer: {
    width: normalize(50),
    height: normalize(45),
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  likeIconStyle: {
    height: normalize(25),
    width: normalize(25),
  },

  comment: {
    width: normalize(50),
    height: normalize(45),
    marginVertical: normalize(15),
    alignItems: 'center',
    justifyContent: 'center',
  },

  commentIconStyle: {
    height: normalize(30),
    width: normalize(30),
  },

  menuContainer: {
    width: normalize(50),
    marginVertical: normalize(20),
    alignItems: 'center',
    justifyContent: 'center',
  },

  menuIconStyle: {
    height: normalize(15),
    width: normalize(15),
  },

  informationContainer: {
    width: normalize(40),
    height: normalize(40),
    borderWidth: 1,
    borderRadius: normalize(10),
    marginVertical: normalize(20),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  infoIconStyle: {
    height: normalize(15),
    width: normalize(15),
  },
});
