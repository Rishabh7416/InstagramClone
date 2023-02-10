import NetInfo from '@react-native-community/netinfo';
import {SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import Router from './src/router';
import Task from './tasks/task';
import {Provider} from 'react-redux';
import {store} from './tasks/store';

export default function App() {
  useEffect(() => {
    const subscribe = NetInfo.addEventListener(netinfo => {
      console.log(netinfo);
    });

    return () => subscribe();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
        {/* <Router /> */}
        <Task />
      </Provider>
    </SafeAreaView>
  );
}
