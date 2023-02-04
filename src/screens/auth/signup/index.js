import {View} from 'react-native';
import React, {useState} from 'react';
import {signUpStyles} from './styles';
import CustomTextInput from './../../../components/customTextInput/index';
import {textInputStyle} from './../../../components/customTextInput/styles';

export default function SignUp() {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [emailId, setEmailId] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  return (
    <View style={signUpStyles.mainContainer}>
      <CustomTextInput
        value={name}
        placeholder={'NAME'}
        placeholderTextColor={'darkgrey'}
        style={textInputStyle.customStyle}
        onChangeText={text => setName(text)}
        container={[signUpStyles.customTextInputContainer, {}]}
      />
      <CustomTextInput
        value={emailId}
        placeholder={'EMAIL'}
        placeholderTextColor={'darkgrey'}
        style={textInputStyle.customStyle}
        onChangeText={text => setEmailId(text)}
        container={signUpStyles.customTextInputContainer}
      />
      <CustomTextInput
        placeholder={'PHONE'}
        value={phoneNumber}
        placeholderTextColor={'darkgrey'}
        style={textInputStyle.customStyle}
        onChangeText={text => setPhoneNumber(text)}
        container={signUpStyles.customTextInputContainer}
      />
      <CustomTextInput
        value={pass}
        placeholder={'PASSWORD'}
        placeholderTextColor={'darkgrey'}
        style={textInputStyle.customStyle}
        onChangeText={text => setPass(text)}
        container={signUpStyles.customTextInputContainer}
      />
      <CustomTextInput
        value={confirmPass}
        placeholder={'CONFIRM PASSWORD'}
        placeholderTextColor={'darkgrey'}
        style={textInputStyle.customStyle}
        onChangeText={text => setConfirmPass(text)}
        container={signUpStyles.customTextInputContainer}
      />
    </View>
  );
}
