import React from 'react';
import {customListRendererstyle} from './styles';
import {View, Text, Image, TouchableOpacity} from 'react-native';

export default function CustomListRenderer({...props}) {
  const {title, icon} = props?.item;

  return (
    <TouchableOpacity style={customListRendererstyle.container}>
      <Image source={icon} style={customListRendererstyle.iconStyle} />
      <Text style={props?.titleStyle}>{title}</Text>
    </TouchableOpacity>
  );
}
