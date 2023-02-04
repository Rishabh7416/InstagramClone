import React from 'react';
import {postFooterStyles} from './styles';
import localimages from '../../../utils/localimages';
import {View, TouchableOpacity, Image} from 'react-native';

export default function PostFooter() {
  return (
    <View style={postFooterStyles.container}>
      <View style={postFooterStyles.commonStyle}>
        <TouchableOpacity>
          <Image
            source={localimages.heartIcon}
            style={postFooterStyles.likeIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={localimages.commentIcon}
            style={postFooterStyles.commentIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={localimages.messageIcon}
            style={postFooterStyles.messageIconStyle}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Image
          source={localimages.saveIcon}
          style={postFooterStyles.saveIconStyle}
        />
      </TouchableOpacity>
    </View>
  );
}
