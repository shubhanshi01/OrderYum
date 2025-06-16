import React from 'react'
import AuthStack from './AuthStack'
import Appstack from './Appstack'
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


const AppNav = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#FEF3E2' }}>
      
        {/* Uncomment the line below to enable authentication stack */}
        {/* <AuthStack /> */}
        <Appstack />
    </View>
  )
}

export default AppNav;
