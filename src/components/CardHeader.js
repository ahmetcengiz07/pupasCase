import React from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icons from '../svg/icons';

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
      <ImageBackground
        source={require('../assets/cardExp.png')}
        style={styles.cardImage}
        resizeMode="cover">
        <View style={styles.creditCardWrapper}>
          <View style={styles.creditCardTopWrapper}>
            <Text style={styles.creditCardTopText}>WEDAL</Text>
            <Text style={styles.creditCardTopText}>PREMIUM</Text>
          </View>
          <View style={[styles.creditCardTopWrapper, {marginBottom: 10}]}>
            <View>
              <Text style={styles.creditCardTopText}>Kart Bakiyesi</Text>
              <Text style={styles.creditCardPriceText}>
                25.320
                <Text style={styles.creditCardDecimalPriceText}>,50₺</Text>
              </Text>
            </View>
            <Icons style={styles.iconWrapper} iconName="masterCard" />
          </View>
        </View>
      </ImageBackground>
    </LinearGradient>
  );
};

const [designHeaderW, deasingHeaderH] = [375, 257];
const designHeaderRatio = deasingHeaderH / designHeaderW;
const deviceWidth = Dimensions.get('window').width;

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
  creditCardWrapper: {
    justifyContent: 'space-between',
    flex: 1,
  },
  creditCardTopWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 19,
    paddingTop: 17,
  },
  creditCardTopText: {
    fontSize: 9,
    lineHeight: 16,
    fontWeight: '700',
    color: '#fff',
  },
  creditCardPriceText: {
    fontSize: 21,
    lineHeight: 23,
    fontWeight: '500',
    color: '#fff',
  },
  creditCardDecimalPriceText: {
    fontSize: 16,
    lineHeight: 23,
    fontWeight: '500',
    color: '#fff',
  },
  iconWrapper: {
    justifyContent: 'flex-end',
    paddingBottom: 3,
  },
});
