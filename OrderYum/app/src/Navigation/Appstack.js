import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../MainScreen/Home';
const Stack = createNativeStackNavigator();

const Appstack = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          {/* <Stack.Screen name="SignUp" component={Signup} options={{ headerShown: false }}/>
          <Stack.Screen name="NextSignup" component={NextSignup} options={{ headerShown: false }}/> */}
        </Stack.Navigator>

  );
}

export default Appstack;
