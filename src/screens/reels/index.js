import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {reelStyles} from './styles';
import Reels from '../../components/reels';


export default function ReelsScreen() {
  const _renderItem = () => <Reels />;
  return (
    <View style={reelStyles.container}>
      <Reels />
      {/* <FlatList data={['', '']} renderItem={_renderItem} pagingEnabled /> */}
    </View>
  );
}
