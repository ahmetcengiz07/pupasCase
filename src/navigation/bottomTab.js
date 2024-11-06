import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Card from '../screens/Card';
import Profile from '../screens/Profile';
import {CustomTabBarButton} from '../components';
import {styles} from '../components/CustomTabBarButton';

const Tab = createBottomTabNavigator();

const BottomTab = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarButton: props => <CustomTabBarButton route={route} props={props} />,
      tabBarStyle: styles.tabBarContainer,
      tabBarActiveTintColor: '#E13915',
      tabBarInactiveTintColor: '#C1C8CD',
      headerShown: false,
    })}
    initialRouteName="Kartlar">
    <Tab.Screen name="Anasayfa" component={Home} />
    <Tab.Screen name="Kartlar" component={Card} />
    <Tab.Screen name="Profil" component={Profile} />
  </Tab.Navigator>
);

export default BottomTab;
