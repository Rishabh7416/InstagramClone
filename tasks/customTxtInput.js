import {StyleSheet, View, TextInput} from 'react-native';
import {normalize} from '../src/utils/dimensions';
import React from 'react';

export const CustomTextInput = ({...props}) => {
  return (
    <View style={{}}>
      <TextInput
        onChangeText={props.onChangeText}
        value={props.value}
        style={styles.customTextInputStyle}
        placeholder={props.placeholder}
        autoCorrect={props.autoCorrect}
        autoCapitalize={props.autoCapitalize}
        autoComplete={props.autoComplete}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  customTextInputStyle: {
    paddingHorizontal: normalize(10),
    height: normalize(50),
    width: '87%',
    alignSelf: 'center',
    borderRadius: normalize(12),
    backgroundColor: '#F3F3F3',
  },
});
