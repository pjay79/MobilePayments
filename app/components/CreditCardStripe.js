import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Config from 'react-native-config';
import stripe from 'tipsi-stripe';
import makePayment from '../services/api';

stripe.setOptions({
  publishableKey: Config.STRIPE_PUBLISH_KEY,
  androidPayMode: 'test',
});

function CreditCardStripe() {
  const requestPayment = async () => {
    try {
      const stripeTokenInfo = await stripe.paymentRequestWithCardForm();
      await makePayment(100, stripeTokenInfo.tokenId);
      console.log('Token created', { stripeTokenInfo });
    } catch (error) {
      console.log('Payment failed', { error });
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Make a payment" onPress={requestPayment} />
    </View>
  );
}

export default CreditCardStripe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
