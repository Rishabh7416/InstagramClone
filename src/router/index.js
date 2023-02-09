import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/home';
import ExploreScreen from '../screens/explore/index';
import ReelScreen from '../screens/reels/index';
import ReelsScreen from '../screens/reels/index';
import NotificationScreen from '../screens/notifications/index';
import {BottomTab} from './bottomTabNavigation';
import screenNames from './screenNames';
import SignUp from '../screens/auth/signup';

export default function Router() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={screenNames.SignUp}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={screenNames.SignUp} component={SignUp} />
        <Stack.Screen name={screenNames.HOME} component={HomeScreen} />
        <Stack.Screen name={screenNames.EXPLORE} component={ExploreScreen} />
        <Stack.Screen name={screenNames.Reels} component={ReelsScreen} />
        <Stack.Screen
          name={screenNames.Notification}
          component={NotificationScreen}
        />
        <Stack.Screen name="Bottom Tab" component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
