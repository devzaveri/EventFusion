import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Route from './src/routes/Route'
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  const [isAuth ,setIsAuth] = useState(false)
  return (
    <NavigationContainer>
      <Route isAuth={isAuth} />
      </NavigationContainer>
  )
}

export default App