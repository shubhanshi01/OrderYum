import  {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TrackOrder = () => {
    return (
        <View style ={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Text style={styles.header}>Track Your Order</Text>
                <Text style={styles.infoText}>Order ID: ORD-123456</Text>
                <Text style={styles.infoText}>Estimated Delivery: 30 minutes</Text>
                <Text style={styles.infoText}>Current Status: On the way</Text>
            </ScrollView>
        </View>
    )
}

 export default TrackOrder;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FEF3E2',
      paddingTop: 40,
    },
    scrollView: {
      paddingHorizontal: 16,
      paddingBottom: 20,
    },
    header: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#FA812F',
      textAlign: 'center',
      marginBottom: 20,
      letterSpacing: 1,
    },
    infoText: {
      fontSize: 16,
      color: '#333',
      marginBottom: 12,
    },
  });