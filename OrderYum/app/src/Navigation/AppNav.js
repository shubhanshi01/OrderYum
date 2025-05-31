import React from 'react'
import Appstack from './Appstack'
import AuthStack from './AuthStack'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

const AppNav = () => {
  return (
    <>
      <Appstack/>
      {/* <AuthStack/> */}
    </>
  )
}

export default AppNav;
