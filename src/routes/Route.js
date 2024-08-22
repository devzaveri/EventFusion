import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import AuthNavigation from '../components/AuthNavigation/AuthNavigation';

const Route = (route) => {
  useEffect(()=> {
    console.log("Route===>" , route);
    
  },[route])
  return (
    <View style={{flex: 1}}>
      {route ? <AuthNavigation /> : <AuthNavigation />}
    </View>
  )
}

export default Route