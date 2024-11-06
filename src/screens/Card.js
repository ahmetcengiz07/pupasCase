import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {PaymentMethods, CardHeader, CardDetails} from '../components';

const Card = () => {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <CardHeader />
        <PaymentMethods />
        <CardDetails />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    backgroundColor: '#F8F9FA',
  },
});

export default Card;
