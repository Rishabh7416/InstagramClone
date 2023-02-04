import {StyleSheet} from 'react-native';
import { normalize } from '../../../utils/dimensions';

export const signUpStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
  },
  customTextInputContainer: {
    marginTop: normalize(30),
  },
});
