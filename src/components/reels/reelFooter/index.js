import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {normalize} from '../../../utils/dimensions';
import localimages from '../../../utils/localimages';
import UserInfo from '../userInfo';

export default function ReelFooter() {
  return (
    <View
      style={{
        // height: normalize(50),
        flexDirection: 'row',
        flex: 1,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }}>
      <UserInfo />
      <View style={{justifyContent: 'space-between',}}>
        <TouchableOpacity
          style={{
            width: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={localimages.messageIcon}
            style={{height: 22, width: 22}}
          />
        </TouchableOpacity>
        <View>
          <TouchableOpacity
            style={{
              width: 50,
              height: 45,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Image
              source={localimages.heartIcon}
              style={{height: 25, width: 25}}
            />
            <TouchableOpacity>
              <Text style={{fontSize: 10}}>{'7,597'}</Text>
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 50,
              height: 45,
              marginVertical: 15,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={localimages.commentIcon}
              style={{height: 30, width: 30}}
            />
            <TouchableOpacity>
              <Text style={{fontSize: 10}}>{'22'}</Text>
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={localimages.messageIcon}
              style={{height: 22, width: 22}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 50,
              marginVertical: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={localimages.menuIcon}
              style={{height: 15, width: 15}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              borderWidth: 1,
              borderRadius: 10,
              marginVertical: 20,
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={localimages.informationIcon}
              style={{height: 15, width: 15}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
