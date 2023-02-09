import React from 'react';
import {normalize} from '../../utils/dimensions';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function CustomButton({...props}) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text
        style={{fontSize: normalize(16), fontWeight: 'bold', color: 'white'}}>
        Log in
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: normalize(40),
    width: '100%',
    borderRadius: normalize(5),
    backgroundColor: '#3997F0',
    marginTop: normalize(40)
  },
});
