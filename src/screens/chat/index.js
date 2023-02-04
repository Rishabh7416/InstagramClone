import React from 'react';
import {View, Text, FlatList} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import CustomTextInput from './../../components/customTextInput/index';
import {textInputStyle} from '../../components/customTextInput/styles';
import {normalize} from '../../utils/dimensions';
import SignUp from '../auth/signup';

export default function Chat() {
  return (
    <View style={{flex: 1}}>
      <SignUp />
    </View>
  );
}
