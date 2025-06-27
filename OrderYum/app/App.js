// Polyfill setImmediate for web compatibility with react-native-swiper
if (typeof setImmediate === 'undefined') {
  global.setImmediate = (fn, ...args) => setTimeout(fn, 0, ...args);
}
import './firebaseConfig';
import app from './firebaseConfig';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNav from './src/Navigation/AppNav';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: '#FEF3E2' }}>
        <StatusBar barStyle="dark-content" />
        <AppNav/>
      </View>
    </GestureHandlerRootView>
  );
}
