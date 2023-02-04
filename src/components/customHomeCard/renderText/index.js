import {View, Text} from 'react-native';
import React from 'react';
import {likeCommentStyle} from './styles';

export default function LikesComments({...props}) {
  const {likes, comment, username} = props?.item;

  return (
    <View style={likeCommentStyle.container}>
      <Text style={likeCommentStyle.likeCountsStyle}>{`${likes} likes`}</Text>
      <Text style={likeCommentStyle.userNameStyle}>{username}</Text>
      <Text style={likeCommentStyle.commentsStyle}>{comment}</Text>
    </View>
  );
}
