import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import Icons from '../svg/icons';

export const CustomTabBarButton = ({route, props}) => {
  const labelColor = props?.accessibilityState?.selected
    ? '#E13915'
    : '#C1C8CD';
  return (
    <TouchableOpacity {...props} style={styles.tabWrapper}>
      <View
        style={[
          styles.tabBottomLine,
          {
            borderColor: labelColor,
            borderTopWidth: props?.accessibilityState?.selected ? 2 : 0,
          },
        ]}
      />
      <Icons iconName={route?.name} color={labelColor} width={25} height={25} />
      <Text style={[{color: labelColor}, styles.tabBarLabelText]}>
        {route?.name}
      </Text>
    </TouchableOpacity>
  );
};

export const deviceWidth = Dimensions.get('window').width;

const [designWidth, designBarWidth, desingBarHeight] = [375, 57, 88];
const barHeightRatio = designWidth / desingBarHeight;
const tabBarHeight = deviceWidth / barHeightRatio;
const barWidthRatio = designBarWidth / designWidth;
const barWidth = deviceWidth * barWidthRatio;

export const styles = StyleSheet.create({
  tabBarContainer: {
    height: tabBarHeight,
    borderRadius: 10,
    backgroundColor: '#fff',
    width: deviceWidth,
  },
  tabWrapper: {
    width: deviceWidth / 3,
    alignItems: 'center',
  },
  tabBottomLine: {
    width: barWidth,
    borderRadius: 1,
    marginBottom: 10,
  },
  tabBarLabelText: {
    marginTop: 5,
    fontSize: 11,
    lineHeight: 19,
    fontFamily: 'TTNormsPro-Medium',
  },
});
