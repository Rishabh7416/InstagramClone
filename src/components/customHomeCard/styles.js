import {StyleSheet} from 'react-native';
import {normalize, SCREEN_WIDTH, vh} from '../../utils/dimensions';

export const customHomeCardStyles = StyleSheet.create({
  postStyle: {
    alignSelf: 'center',
    resizeMode: 'contain',
    // backgroundColor: 'red',
    height: vh(440),
  },

  listHeaderStyle: {
    width: '9%',
    height: normalize(3),
    backgroundColor: '#18191A',
    borderRadius: normalize(20),
    alignSelf: 'center',
    marginVertical: normalize(10),
  },

  modalContainer: {
    height: '42%',
    marginTop: 'auto',
    alignSelf: 'center',
    width: SCREEN_WIDTH,
    backgroundColor: 'white',
    borderTopLeftRadius: normalize(15),
    borderTopRightRadius: normalize(15),
  },

  customTitleStyle: {
    fontSize: normalize(12),
    fontWeight: '400',
  },
});
