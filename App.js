import NetInfo from '@react-native-community/netinfo';
import {Text, SafeAreaView, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import Router from './src/router';

export default function App() {

  useEffect(() => {
    const subscribe = NetInfo.addEventListener(netinfo => {
      console.log(netinfo);
    });

    return () => subscribe();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Router />
    </SafeAreaView>
  );
}
