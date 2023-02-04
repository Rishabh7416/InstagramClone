import {StyleSheet} from 'react-native';
import {normalize} from '../../utils/dimensions';

export const textInputStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // backgroundColor: '#FDFDFD'
    // backgroundColor: 'red'
  },
  customStyle: {
    fontWeight: 'bold',
    fontSize: normalize(12),
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    height: normalize(50),
    // marginTop: 50
  },
});
