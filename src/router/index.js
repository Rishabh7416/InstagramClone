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

export default function Router() {
  const Stack = createNativeStackNavigator();
  return (
    <BottomTab/>
    // <NavigationContainer>
    //   <Stack.Navigator
    //     initialRouteName="Home"
    //     screenOptions={{headerShown: false}}>
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //     <Stack.Screen name="Explore" component={ExploreScreen} />
    //     <Stack.Screen name="Reel" component={ReelsScreen} />
    //     <Stack.Screen name="Notification" component={NotificationScreen} />
    //     <Stack.Screen name="Bottom Tab" component={BottomTab} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}
