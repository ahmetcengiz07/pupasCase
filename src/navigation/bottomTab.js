import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Card from '../screens/Card';
import Profile from '../screens/Profile';
import {Text, Dimensions, TouchableOpacity, View} from 'react-native';
import Icons from '../svg/icons';

export const deviceWidth = Dimensions.get('window').width;

const [designWidth, designBarWidth, desingBarHeight] = [375, 57, 88];
const barHeightRatio = designWidth / desingBarHeight;
const tabBarHeight = deviceWidth / barHeightRatio;
const barWidthRatio = designBarWidth / designWidth;
const barWidth = deviceWidth * barWidthRatio;

const Tab = createBottomTabNavigator();

const BottomTab = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarButton: props => {
        const labelColor = props?.accessibilityState?.selected
          ? '#EF4A15'
          : '#C1C8CD';
        return (
          <TouchableOpacity
            {...props}
            style={{
              width: deviceWidth / 3,
              alignItems: 'center',
            }}>
            <View
              style={{
                borderTopWidth: props?.accessibilityState?.selected ? 2 : 0,
                borderRadius: 1,
                width: barWidth,
                borderColor: labelColor,
                marginBottom: 10,
              }}
            />
            <Icons
              iconName={route?.name}
              color={labelColor}
              width={25}
              height={25}
            />
            <Text
              style={{
                color: labelColor,
                marginTop: 5,
                fontSize: 11,
                lineHeight: 19,
              }}>
              {route?.name}
            </Text>
          </TouchableOpacity>
        );
      },
      tabBarStyle: {
        height: tabBarHeight,
        borderRadius: 10,
        backgroundColor: '#fff',
        width: deviceWidth,
      },

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
