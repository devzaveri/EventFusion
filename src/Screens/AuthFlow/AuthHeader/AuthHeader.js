import {
    HeaderContainer,
    AppLogo
  } from "./AuthHeaderStyles"
import { View, Text } from 'react-native'
import React from 'react'
import Images from "../../../helpers/Images"

const AuthHeader = () => {
  return (
    <HeaderContainer>
    <AppLogo source={Images.appLogo} />
  </HeaderContainer>
  )
}

export default AuthHeader