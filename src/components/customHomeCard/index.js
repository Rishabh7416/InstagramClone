import React from 'react';
import PostHeader from './header';
import PostFooter from './footer';
import LikesComments from './renderText';
import CustomModalWrapper from '../modal';
import {customHomeCardStyles} from './styles';
import {View, Image, FlatList} from 'react-native';
import { normalize } from '../../utils/dimensions';
import {userMenuData} from '../../utils/localeData';
import CustomListRenderer from '../customListRenderer';
import localimages from '../../utils/localimages';

export default function CustomHomeCard({...props}) {
  const [visible, setVisible] = React.useState(false);
  const {username, profile, post} = props?.item;

  const _renderItem = ({item}) => (
    <CustomListRenderer
      item={item}
      titleStyle={customHomeCardStyles.customTitleStyle}
    />
  );

  const _listHeader = () => (
    <View style={customHomeCardStyles.listHeaderStyle} />
  );

  return (
    <View style = {{marginVertical: normalize(15)}}>
      <PostHeader
        openModal={() => setVisible(!visible)}
        username={username}
        profilePic={profile}
      />
      <Image
        source={localimages.stories}
        style={customHomeCardStyles.postStyle}
      />
      <PostFooter />
      <LikesComments item={props?.item} />
      <CustomModalWrapper
        visibility={visible}
        onBackDropPress={() => setVisible(false)}>
        <View style={customHomeCardStyles.modalContainer}>
          <FlatList
            data={userMenuData}
            bounces = {false}
            renderItem={_renderItem}
            ListHeaderComponent={_listHeader}
          />
        </View>
      </CustomModalWrapper>
    </View>
  );
}