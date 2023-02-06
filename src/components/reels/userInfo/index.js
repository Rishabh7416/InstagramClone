import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import localimages from '../../../utils/localimages';

export default function UserInfo() {
  return (
    <View
      style={{
        flex: 1,
        // borderWidth: 1,
        alignSelf: 'flex-end',
      }}>
      <View>
        <View
          style={{
            width: '70%',
            // borderWidth: 1,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Image
            source={localimages.profileIcon}
            style={{height: 30, width: 30, borderRadius: 50}}
          />
          <Text style={{fontSize: 13, fontWeight: 'bold'}}>
            The best comback
          </Text>
          <TouchableOpacity
            style={{
              height: 30,
              borderWidth: 0.5,
              width: 65,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 8,
            }}>
            <Text style={{fontSize: 12.5, fontWeight: '500'}}>Follow</Text>
          </TouchableOpacity>
        </View>
        <Text ellipsizeMode="tail" style = {{marginTop: 15}}>Caption</Text>
        <TouchableOpacity style={{marginVertical: 15}}>
          <Text style={{fontSize: 12.5, fontWeight: '500'}}>Follow</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
