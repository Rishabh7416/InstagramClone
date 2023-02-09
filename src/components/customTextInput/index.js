import {View, Text, TextInput, Image, StyleSheet} from 'react-native';
import React, {forwardRef} from 'react';
import {textInputStyle} from './styles';
import {normalize} from '../../utils/dimensions';

const CustomTextInput = ({...props}) => {
  return (
    <View style={[styles.container, props.container]}>
      {/* <Image
        source={props.icon}
        style={{
          height: 15,
          width: 15,
          padding: 10,
          margin: 5,
          resizeMode: 'stretch',
          alignItems: 'center',
        }}
      /> */}
      <TextInput
        ref={props.refer}
        value={props.value}
        autoCorrect={props.autoCorrect}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        placeholderTextColor={'darkgrey'}
        autoCapitalize={props.autoCapitalize}
        style={[textInputStyle.customStyle, props.customStyle]}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    height: normalize(50),
    // borderWidth: 1,
    justifyContent: 'center',
  },
});
