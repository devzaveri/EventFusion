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
} from "./SignUpScreenStyles"
import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import AuthHeader from "../AuthHeader/AuthHeader"
import Colors from "../../../helpers/Color"
import ScreenName from "../../../helpers/ScreenName"

const SignUpScreen = ({navigation}) => {
    function MainBodyFunc(){
        return(
          <MainBodyContainer>
            <InputBox isEmail={"isEmail"} selectionColor={Colors.textColor} placeholder="Name" placeholderTextColor={Colors.textColor} />
            <InputBox  selectionColor={Colors.textColor} placeholder="Email" placeholderTextColor={Colors.textColor} />
            <InputBox selectionColor={Colors.textColor} placeholder="Password" placeholderTextColor={Colors.textColor} />
            <LoginBtn onPress={()=> {
                navigation.navigate(ScreenName.auth.LoginScreen)
            }}>
              <LoginText>SignUp</LoginText>
            </LoginBtn>
           
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

export default SignUpScreen