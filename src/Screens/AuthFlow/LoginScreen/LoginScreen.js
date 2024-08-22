import {
  MainContainer,
  MainBodyContainer,
  InputBox,
  LoginBtn,
  LoginText,
  NewAccountView,
  NewAccountText,
  NewAccountBtn,
  SignUpText
} from "./LoginScreenStyles"
import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Images from "../../../helpers/Images"
import AuthHeader from "../AuthHeader/AuthHeader"
import Colors from "../../../helpers/Color"
import ScreenName from "../../../helpers/ScreenName"

const LoginScreen = ({navigation}) => {
  function MainBodyFunc(){
    return(
      <MainBodyContainer>
        <InputBox isEmail={"isEmail"} selectionColor={Colors.textColor} placeholder="Email" placeholderTextColor={Colors.textColor} />
        <InputBox selectionColor={Colors.textColor} placeholder="Password" placeholderTextColor={Colors.textColor} />
        <LoginBtn>
          <LoginText>Login</LoginText>
        </LoginBtn>
        <NewAccountView>
          <NewAccountText>Don't have account?</NewAccountText>
          <NewAccountBtn onPress={()=> {
            navigation.navigate(ScreenName.auth.SignUpScreen)
          }}>
            <SignUpText>SignUp</SignUpText>
          </NewAccountBtn>
        </NewAccountView>
      </MainBodyContainer>
    )
  }
  return (
    <MainContainer >
      <ScrollView>
      <AuthHeader />
      
      {MainBodyFunc()}
      </ScrollView>
    </MainContainer>
  )
}

export default LoginScreen