import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';
import Home from '../MainScreen/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Cart from '../MainScreen/Cart';
import Profile from '../MainScreen/Profile/Profile';
import Meals from '../MainScreen/Meals'
import Settings from '../MainScreen/Profile/Settings/Settings';
import EditProfile from '../MainScreen/Profile/EditProfile';
import MyOrders from '../MainScreen/Profile/MyOrdersScreen/MyOrders';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();




const MainTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === 'Home') iconName = 'home';
        else if (route.name==='Meals') iconName = 'pizza'
        else if (route.name === 'Cart') iconName = 'cart';
        else if (route.name === 'Profile') iconName = 'person';
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#FA812F',
      tabBarInactiveTintColor: 'gray',
    })}
  >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Meals" component={Meals} />
    <Tab.Screen name="Cart" component={Cart} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);

const Appstack = () => {
    return (
        <Stack.Navigator initialRouteName="MainTabs">
          <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
          <Stack.Screen name="EditProfile" component={EditProfile} options={{ title: 'Edit Profile', headerShown: true, headerTintColor: '#FA812F' }} />
          <Stack.Screen name="Settings" component={Settings} options={{ title: 'Settings', headerShown: true, headerTintColor: '#FA812F' }} />
          <Stack.Screen name="MyOrders" component={MyOrders} options={{ title: 'My Orders', headerShown: true, headerTintColor: '#FA812F' }} />
          <Stack.Screen name="Cart" component={Cart} options={{ title: 'Cart', headerShown: true, headerTintColor: '#FA812F' }} />
        </Stack.Navigator>

  );
}

export default Appstack;
