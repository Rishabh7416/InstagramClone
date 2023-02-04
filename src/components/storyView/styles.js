import {StyleSheet} from 'react-native';
import {SCREEN_WIDTH, SCREEN_HEIGHT, normalize} from '../../utils/dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  renderItemStyle: {
    resizeMode: 'stretch',
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
  },
  headerContainer: {
    flexDirection: 'row',
    height: normalize(50),
    // backgroundColor: 'red',
    // position: 'absolute',
    justifyContent: 'space-between',
  },
  headerContainerInner: {
    flexDirection: 'row',
    alignItems: 'center',
    // width: normalize(80),
    justifyContent: 'space-between',
  },
  avatarStyle: {
    width: normalize(35),
    height: normalize(35),
    borderRadius: normalize(50),
  },
  iconStyle: {
    width: normalize(40),
    height: normalize(40),
    borderRadius: normalize(50),
  },
  userNameStyle: {
    fontWeight: '600',
    fontSize: normalize(15),
    color: 'black',
    marginLeft: normalize(10),
  },
  renderItemMainContainer: {
    width: '93%',
    alignSelf: 'center',
  },
});
