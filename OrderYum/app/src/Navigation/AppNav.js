import React, { useContext } from 'react'
import AuthStack from './AuthStack'
import Appstack from './Appstack'
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from '../Context/AuthContext';
import { useEffect } from 'react';
const AppNav = () => {
  const {userloggeduid,checkIsLogged}=useContext(AuthContext);
  useEffect(()=>{
    checkIsLogged()

  },[])
  console.log("from AppNav (uid)",userloggeduid);

  return (
    <View style={{ flex: 1, backgroundColor: '#FEF3E2' }}>
      {userloggeduid?
        <Appstack/>
        :
        <AuthStack  />
      }
    </View>
  )
}

export default AppNav;
