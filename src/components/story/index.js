import {View, Text, Image, FlatList} from 'react-native';
import React from 'react';
import {storyStyle} from './styles';
import localimages from '../../utils/localimages';
import {storyData} from '../../utils/localeData';

export default function Story() {
  const _renderItem = ({item}) => (
    <View style={storyStyle.container}>
      <Image source={{uri: item?.profile}} style={storyStyle.profileImage} />
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={storyStyle.userNameStyle}>
        {item.username}
      </Text>
    </View>
  );

  return (
    <FlatList
      data={storyData}
      renderItem={_renderItem}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={storyStyle.listStyle}
    />
  );
}
