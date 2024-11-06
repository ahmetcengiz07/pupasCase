import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CustomTabBarButton, styles} from '../components/CustomTabBarButton';
import Home from '../screens/Home';
import Card from '../screens/Card';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

const screenOptions = ({route}) => ({
  tabBarButton: props => <CustomTabBarButton route={route} {...props} />,
  tabBarStyle: styles.tabBarContainer,
  tabBarActiveTintColor: '#E13915',
  tabBarInactiveTintColor: '#C1C8CD',
  headerShown: false,
});

const BottomTab = () => (
  <Tab.Navigator screenOptions={screenOptions} initialRouteName="Kartlar">
    <Tab.Screen name="Anasayfa" component={Home} />
    <Tab.Screen name="Kartlar" component={Card} />
    <Tab.Screen name="Profil" component={Profile} />
  </Tab.Navigator>
);

export default BottomTab;
