import {View, Text, FlatList} from 'react-native';
import React from 'react';
import CustomModalWrapper from '../modal';
import {userMenuData} from '../../utils/localeData';

export default function BottoSheet({...props}) {
  const _renderItem = ({item}) => (
    <CustomListRenderer
      item={item}
      titleStyle={customHomeCardStyles.customTitleStyle}
    />
  );
  return (
    <CustomModalWrapper visbiility={props.visible}>
      <FlatList bounces={false} data={userMenuData} renderItem={_renderItem} />
    </CustomModalWrapper>
  );
}
