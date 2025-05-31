// Polyfill setImmediate for web compatibility with react-native-swiper
if (typeof setImmediate === 'undefined') {
  global.setImmediate = (fn, ...args) => setTimeout(fn, 0, ...args);
}

import React from 'react';
import { StatusBar, View } from 'react-native';
import Login from './src/LoginSignup/Login';
import Signup from './src/LoginSignup/Signup';
import NextSignup from './src/LoginSignup/NextSignup';
import { NavigationContainer } from '@react-navigation/native';
import AppNav from './src/Navigation/AppNav';
export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#FEF3E2' }}>
      <StatusBar barStyle="dark-content" />
      {/* <Login />
      <Signup />
      <NextSignup /> */}
      <AppNav/>
    </View>
  );
}


