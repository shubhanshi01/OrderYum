import React from 'react';
import { StatusBar } from 'react-native';
import Login from './src/LoginSignup/Login';
import Signup from './src/LoginSignup/Signup';
export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/* <Login /> */}
      <Signup />
    </>
  );
}
