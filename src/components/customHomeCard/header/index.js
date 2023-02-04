import React from 'react';
import {postHeaderStyles} from './styles';
import localimages from '../../../utils/localimages';
import {View, Text, Image, TouchableOpacity} from 'react-native';

export default function PostHeader({...props}) {
  return (
    <View style={[postHeaderStyles.container, {height: 50}]}>
      <View style={postHeaderStyles.commonStyle}>
        <Image
          source={{uri: props?.profilePic || null}}
          style={[postHeaderStyles.imageStyle, props.customImageStyle]}
        />
        <Text style={postHeaderStyles.nameStyle}>{props?.username}</Text>
      </View>
      {props?.menuButton && (
        <TouchableOpacity onPress={props?.openModal}>
          <Image
            source={localimages.menuIcon}
            style={postHeaderStyles.menuIconStyle}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

PostHeader.defaultProps = {
  menuButton: true,
};
