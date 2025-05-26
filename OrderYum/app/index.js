import React from 'react';
import { StatusBar } from 'react-native';
import Login from './src/LoginSignup/Login';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Login />
    </>
  );
}
