import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ScreenName from '../../helpers/ScreenName';
import LoginScreen from '../../Screens/AuthFlow/LoginScreen/LoginScreen';
import SignUpScreen from '../../Screens/AuthFlow/SignUpScreen/SignUpScreen';

const AuthNavigation = () => {
  const Stack = createStackNavigator();
  return (
    
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ScreenName.auth.LoginScreen} component={LoginScreen} />
      <Stack.Screen name={ScreenName.auth.SignUpScreen} component={SignUpScreen} />
    </Stack.Navigator>
    
  )
}

export default AuthNavigation