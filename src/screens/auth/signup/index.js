import React, {useState} from 'react';
import {signUpStyles} from './styles';
import {View, Image} from 'react-native';
import localimages from '../../../utils/localimages';
import screenNames from '../../../router/screenNames';
import {useNavigation} from '@react-navigation/native';
import {validations} from '../../../utils/validations';
import CustomLoader from '../../../components/customLoader';
import CustomButton from '../../../components/cutomButton/button';
import {fireBaseFunctions} from '../../../utils/fireBaseFunctions';
import CustomTextInput from './../../../components/customTextInput/index';
import {textInputStyle} from './../../../components/customTextInput/styles';

export default function SignUp() {
  const [pass, setPass] = useState('');
  const [emailId, setEmailId] = useState('');
  const [loader, setLoader] = useState(false);
  const [valid, setValid] = useState(false);
  const navigation = useNavigation();

  const authenticate = () => {
    setLoader(true);
    fireBaseFunctions._createUserWithEmailPassword(
      {emailId, pass},
      response => {
        setLoader(false);
        navigation.navigate(screenNames.HOME);
      },
      response => {
        setLoader(true);
      },
    );
  };

  const validateEmail = text => {
    setEmailId(text);
    validations.emailValidation(emailId, state => {
      setValid(state);
    });
  };

  return (
    <View style={signUpStyles.mainContainer}>
      <Image
        source={localimages.instagramLogoIcon}
        style={signUpStyles.imagestyle}
      />
      <CustomTextInput
        value={emailId}
        autoCorrect={false}
        autoCapitalize="none"
        placeholder={'Phone Number, username, or email'}
        placeholderTextColor={'darkgrey'}
        style={textInputStyle.customStyle}
        onChangeText={text => validateEmail(text)}
        container={signUpStyles.customTextInputContainer}
      />
      <CustomTextInput
        value={pass}
        autoCorrect={false}
        autoCapitalize="none"
        placeholder={'Password'}
        placeholderTextColor={'darkgrey'}
        style={textInputStyle.customStyle}
        onChangeText={text => setPass(text)}
        container={signUpStyles.customTextInputContainer}
      />
      {/* {JSXErrView.validationView(
        valid ? 'Validation' : 'lny7bT98U0J9K0LO-P;=[',
      )} */}
      <CustomButton onPress={authenticate} />
      <CustomLoader loaderSize={'large'} visible={loader} />
    </View>
  );
}
