import React from 'react';
import {View, Image} from 'react-native';
import {reelStyles} from './styles';
import Reels from '../../components/reels';
import localimages from '../../utils/localimages';

export default function ReelsScreen() {
  return (
    <View style={reelStyles.container}>
      <Reels />
    </View>
  );
}
