import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icons from '../svg/icons';

export const PaymentMethods = () => {
  return (
    <View style={styles.paymentMethodsContainer}>
      <View style={styles.buttonContainer}>
        <Icons iconName="scan" color="#fff" />
        <Text style={styles.buttonText}>QR ile öde</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Icons iconName="deposit" color="#fff" />
        <Text style={styles.buttonText}>Para yükle</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  paymentMethodsContainer: {
    flexDirection: 'row',
    paddingTop: 12,
    paddingBottom: 15,
    borderWidth: 1,
    width: '100%',
    borderColor: '#ECEEF0',
    backgroundColor: '#F8F9FA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 11,
    paddingVertical: 9,
    paddingHorizontal: 16,
    backgroundColor: '#EF4A15',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: ' rgba(255, 255, 255, 0.2)',
  },
  buttonText: {
    paddingLeft: 6,
    color: '#fff',
    fontFamily: 'TTNormsPro-Medium',
    fontSize: 14,
    lineHeight: 20,
  },
});
