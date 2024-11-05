import React from 'react';
import {StyleSheet, Text, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {deviceWidth} from '../navigation/bottomTab';

export const CardHeader = () => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      colors={['#fff', '#FDE1D8', '#EF4A15']}
      style={[
        styles.gradient,
        {width: deviceWidth, height: deviceWidth * designHeaderRatio},
      ]}>
      <Text style={styles.cardHeaderText}>Kartım</Text>
      <Image
        source={require('../assets/cardExp.png')}
        style={styles.cardImage}
        resizeMode="cover"
      />
    </LinearGradient>
  );
};

const [designHeaderW, deasingHeaderH] = [375, 257];
const designHeaderRatio = deasingHeaderH / designHeaderW;

const styles = StyleSheet.create({
  gradient: {
    justifyContent: 'space-between',
  },
  cardHeaderText: {
    fontSize: 16,
    lineHeight: 24,
    marginTop: 25,
    fontWeight: '500',
    textAlign: 'center',
    color: '#313538',
  },
  cardImage: {
    width: 230,
    height: 115,
    alignSelf: 'center',
  },
});
