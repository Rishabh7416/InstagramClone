import {signUpStyles} from './styles';
import {View, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomTextInput from './../../../components/customTextInput/index';
import {textInputStyle} from './../../../components/customTextInput/styles';
import {fireBaseFunctions} from '../../../utils/fireBaseFunctions';
import CustomButton from '../../../components/cutomButton/button';

export default function SignUp() {
  const [pass, setPass] = useState('');
  const [emailId, setEmailId] = useState('');

  const authenticate = () => {
    fireBaseFunctions._createUserWithEmailPassword(
      {emailId, pass},
      response => {
        alert('success');
      },
      response => {
        alert(response.code);
      },
    );
  };

  return (
    <View style={signUpStyles.mainContainer}>
      <CustomTextInput
        value={emailId}
        placeholder={'Full Name'}
        placeholderTextColor={'darkgrey'}
        style={textInputStyle.customStyle}
        onChangeText={text => setEmailId(text)}
        container={signUpStyles.customTextInputContainer}
      />
      <CustomTextInput
        value={pass}
        placeholder={'Password'}
        placeholderTextColor={'darkgrey'}
        style={textInputStyle.customStyle}
        onChangeText={text => setPass(text)}
        container={signUpStyles.customTextInputContainer}
      />
      <CustomButton onPress = {authenticate}/>
    </View>
  );
}
