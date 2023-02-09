import {StyleSheet} from 'react-native';
import {normalize, vh} from '../../../utils/dimensions';

export const signUpStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  customTextInputContainer: {
    marginTop: normalize(18),
  },
  imagestyle: {
    alignSelf: 'center',
    resizeMode: 'contain',
    height: normalize(70),
    width: vh(200),
  },
});
