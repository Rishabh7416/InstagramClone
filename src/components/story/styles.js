import {StyleSheet} from 'react-native';
import {normalize} from '../../utils/dimensions';

export const storyStyle = StyleSheet.create({
  container: {
    alignItems:'center',
    width: normalize(70),
    height: normalize(80),
    marginHorizontal: normalize(10),
    justifyContent: 'space-between',
  },
  
  profileImage:{
    height: normalize(60),
    width: normalize(60),
    borderRadius: normalize(50)
  },
  
  listStyle: {
    height: normalize(99),
  },

  storyContainerStyle:{
    height: normalize(70),
  },

  userNameStyle: {
    textAlign: 'center',
    fontSize: normalize(12)
  }
});
