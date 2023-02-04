import React from 'react';
import {Image} from 'react-native';
import screenNames from './screenNames';
import HomeScreen from '../screens/home';
import ReelsScreen from '../screens/reels';
import {normalize} from '../utils/dimensions';
import localimages from '../utils/localimages';
import ExploreScreen from '../screens/explore';
import ProfileScreen from '../screens/profile';
import NotificationScreen from '../screens/notifications';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export const BottomTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{headerShown: false, tabBarShowLabel: false}}>
        <Tab.Screen
          name={screenNames.HOME}
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={
                  focused
                    ? localimages.homeActiveIcon
                    : localimages.homeInactionIcon
                }
                style={{height: normalize(20), width: normalize(20)}}
              />
            ),
          }}
        />
        <Tab.Screen
          name={screenNames.EXPLORE}
          component={ExploreScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={localimages.searchIcon}
                style={{
                  height: normalize(17.6),
                  width: normalize(17.6),
                  tintColor: focused ? 'black' : 'grey',
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name={screenNames.Reels}
          component={ReelsScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={
                  focused
                    ? localimages.reelActiveIcon
                    : localimages.reelInactiveIcon
                }
                style={{height: normalize(19), width: normalize(19)}}
              />
            ),
          }}
        />
        <Tab.Screen
          name={screenNames.Notification}
          component={NotificationScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={focused ? localimages.heartIcon : localimages.heartIcon}
                style={{height: normalize(20), width: normalize(20)}}
              />
            ),
          }}
        />
        <Tab.Screen
          name={screenNames.Profile}
          component={ProfileScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={focused ? localimages.heartIcon : localimages.heartIcon}
                style={{height: normalize(20), width: normalize(20)}}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
