import {StyleSheet} from 'react-native';
import {normalize} from '../../utils/dimensions';

export const textInputStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // backgroundColor: '#FDFDFD'
    // backgroundColor: 'red'
  },
  customStyle: {
    fontWeight: '500',
    fontSize: normalize(12),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: 'grey',
    height: normalize(50),
    borderRadius: normalize(6),
    paddingHorizontal: normalize(10)
  },
});
