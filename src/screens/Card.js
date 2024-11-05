import React from 'react';
import {SafeAreaView} from 'react-native';
import {PaymentMethods, CardHeader, CardDetails} from '../components';

const Card = () => {
  return (
    <SafeAreaView>
      <CardHeader />
      <PaymentMethods />
      <CardDetails />
    </SafeAreaView>
  );
};

export default Card;
