import React from 'react';
import ReelFooter from './reelFooter';
import {View, Image} from 'react-native';
import {customReelStyles} from './styles';
import VideoPlayer from '../video';

export default function Reels() {
  return (
    <View style={customReelStyles.container}>
      <VideoPlayer />
      <ReelFooter />
    </View>
  );
}

// import React from 'react';
// import ReelFooter from './reelFooter';
// import {View, Image,NativeModules} from 'react-native';
// import {customReelStyles} from './styles';
// import Video from 'react-native-video'
// import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

// export default function Reels() {
//   const bottomBarHeight = useBottomTabBarHeight()
//   const statusBarHeight =
//   return (
//     <View style={customReelStyles.container}>
//       <ReelFooter />
//     </View>
//   );
// }
