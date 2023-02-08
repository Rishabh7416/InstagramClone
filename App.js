import {Text, SafeAreaView, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import ProgressBand from './src/components/progressBand/index';
import StoryView from './src/components/storyView';
import Chat from './src/screens/chat';
import HomeScreen from './src/screens/home';
import Router from './src/router';
import SignUp from './src/screens/auth/signup';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <Router/> */}
      <SignUp/>
    </SafeAreaView>
  );
}
