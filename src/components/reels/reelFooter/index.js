import UserInfo from '../userInfo';
import React, {useState} from 'react';
import {reelFooterStyle} from './styles';
import localimages from '../../../utils/localimages';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import BottoSheet from '../../bottomSheet';

export default function ReelFooter() {
  const [visible, setVisible] = useState(false);

  return (
    <View style={reelFooterStyle.container}>
      <UserInfo />
      <View style={reelFooterStyle.innerContainer}>
        <TouchableOpacity
          onPress={() => setVisible(!visible)}
          style={reelFooterStyle.shareContainer}>
          <Image
            source={localimages.messageIcon}
            style={reelFooterStyle.shareIconStyle}
          />
        </TouchableOpacity>
        <View>
          <TouchableOpacity style={reelFooterStyle.likeContainer}>
            <Image
              source={localimages.heartIcon}
              style={reelFooterStyle.likeIconStyle}
            />
            <TouchableOpacity>
              <Text style={{fontSize: 10}}>{'7,597'}</Text>
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity style={reelFooterStyle.comment}>
            <Image
              source={localimages.commentIcon}
              style={reelFooterStyle.commentIconStyle}
            />
            <TouchableOpacity>
              <Text style={{fontSize: 10}}>{'22'}</Text>
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity style={reelFooterStyle.shareContainer}>
            <Image
              source={localimages.messageIcon}
              style={reelFooterStyle.shareIconStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={reelFooterStyle.menuContainer}
            onPress={() => setVisible(!visible)}>
            <Image
              source={localimages.menuIcon}
              style={reelFooterStyle.menuIconStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity style={reelFooterStyle.informationContainer}>
            <Image
              source={localimages.informationIcon}
              style={reelFooterStyle.infoIconStyle}
            />
          </TouchableOpacity>
        </View>
      </View>
      <BottoSheet visible = {visible}/>
    </View>
  );
}
