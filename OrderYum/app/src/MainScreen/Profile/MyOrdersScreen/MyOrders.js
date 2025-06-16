import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyOrders = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Orders</Text>
      <Text style={styles.text}>Your past orders will be shown here.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FEF3E2',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FA812F',
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
});

export default MyOrders;
