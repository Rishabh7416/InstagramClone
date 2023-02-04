import {StyleSheet} from 'react-native';
import {normalize} from '../../../utils/dimensions';

export const likeCommentStyle = StyleSheet.create({
  container: {
    marginHorizontal: normalize(10),
  },

  likeCountsStyle: {
    fontSize: normalize(12),
    fontWeight: '600',
  },

  userNameStyle: {
    fontSize: normalize(12),
    fontWeight: '600',
    marginTop: normalize(5),
  },

  commentsStyle: {},
});
