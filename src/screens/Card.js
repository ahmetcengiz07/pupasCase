import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {PaymentMethods, CardHeader, CardDetails} from '../components';

const Card = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollableContent}>
        <CardHeader />
        <PaymentMethods />
        <CardDetails />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F9FA',
    flex: 1,
  },
  scrollableContent: {
    marginBottom: 15,
  },
});

export default Card;
