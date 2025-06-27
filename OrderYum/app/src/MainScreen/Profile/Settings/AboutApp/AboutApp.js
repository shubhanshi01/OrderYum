import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const AboutApp = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../../Component/images/header.jpg')} style={styles.logo} />
      <Text style={styles.title}>OrderYum</Text>
      <Text style={styles.subtitle}>Your Favorite Food, Delivered Fast</Text>
      <Text style={styles.sectionTitle}>About the App</Text>
      <Text style={styles.text}>
        OrderYum is your one-stop solution for ordering delicious meals from your favorite restaurants. Enjoy a seamless experience, real-time order tracking, and exclusive offers—all in one app. Whether you're craving a quick snack or a full meal, OrderYum brings the best food to your doorstep, fast and fresh!
      </Text>
      <Text style={styles.sectionTitle}>Features</Text>
      <Text style={styles.text}>
        • Easy and secure sign up/login{"\n"}
        • Browse a wide variety of cuisines{"\n"}
        • Real-time order tracking{"\n"}
        • Exclusive deals and offers{"\n"}
        • User-friendly interface
      </Text>
      <Text style={styles.sectionTitle}>Contact Us</Text>
      <Text style={styles.text}>
        Email: support@orderyum.com{"\n"}
        Phone: +91 98765 43210
      </Text>
      <Text style={styles.footer}>Thank you for choosing OrderYum!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEF3E2',
    alignItems: 'center',
    padding: 24,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 20,
    marginBottom: 18,
    marginTop: 24,
    resizeMode: 'cover',
    borderWidth: 2,
    borderColor: '#FA812F',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FA812F',
    marginBottom: 4,
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 18,
    color: '#E67E22',
    marginBottom: 18,
    fontStyle: 'italic',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FA812F',
    marginTop: 18,
    marginBottom: 6,
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
    lineHeight: 22,
    alignSelf: 'flex-start',
  },
  footer: {
    marginTop: 32,
    fontSize: 16,
    color: '#FA812F',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default AboutApp;
