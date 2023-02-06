import React from 'react';
import ReelFooter from './reelFooter';
import {View, Image} from 'react-native';
import {customReelStyles} from './styles';
import localimages from '../../utils/localimages';

export default function Reels() {
  return (
    <View style={customReelStyles.container}>
      {/* <Image source={localimages.stories} /> */}
      <ReelFooter />
    </View>
  );
}
