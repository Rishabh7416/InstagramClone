import {StyleSheet} from 'react-native';
import {normalize} from '../../utils/dimensions';

export const customListRendererstyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '95%',
    alignSelf: 'center',
    marginVertical: normalize(10),
  },

  iconStyle: {
    height: normalize(20),
    width: normalize(20),
    marginRight: normalize(10),
  },
});
