import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function CustomButton({...props}) {
  return (
    <TouchableOpacity style={styles.container} onPress = {props.onPress}>
      <Text>Register</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 150,
    borderRadius: 10,
  },
});
