import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import CreditCardStripe from './app/components/CreditCardStripe';

const App = () => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.header}>Mobile Payments</Text>
    <Text style={styles.subheader}>REACT NATIVE</Text>
    <CreditCardStripe />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    margin: 10,
  },
  subheader: {
    textAlign: 'center',
    color: '#000000',
    marginBottom: 15,
  },
});

export default App;
