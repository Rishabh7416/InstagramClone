import {View, ActivityIndicator} from 'react-native';
import React from 'react';

export default function CustomLoader({...props}) {
  return (
    <View
      style={{
        // backgroundColor: 'black',
        // flex: 1
      }}>
      <ActivityIndicator
        size={props.loaderSize}
        color="black"
        animating={props.visible}
      />
    </View>
  );
}
