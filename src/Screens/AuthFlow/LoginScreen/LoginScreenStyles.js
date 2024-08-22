import styled from 'styled-components/native';
import {Platform, StyleSheet} from 'react-native';
import {rh, rs, rw} from 'react-native-full-responsive';
import Colors from '../../../helpers/Color';


export const MainContainer = styled.View`
flex: 1;
background: ${Colors.theamColor};
`
export const MainBodyContainer = styled.View`
flex: 1;
align-items: center;
padding-bottom: ${rh(2)}px;
`
export const InputBox = styled.TextInput`
border-bottom-width: 2px;
border-color: "#000";
width: ${rw(70)}px;
font-size: ${rs(16)}px;
color: ${Colors.textColor};
border-color: ${Colors.textColor};
margin-top: ${$props => $props.isEmail ? rh(0) : rh(3)}px;
`
export const LoginBtn = styled.TouchableOpacity`
height: ${rh(6)}px;
width: ${rw(70)}px;
border-width: 2px;
margin-top: ${rh(8)}px;
border-radius: ${rw(2)}px;
justify-content: center;
align-items: center;
border-color: ${Colors.textColor};
`
export const LoginText = styled.Text`
font-size: ${rs(16)}px;
color: ${Colors.textColor};
`
export const NewAccountView  = styled.View`
flex-direction: row;
margin-top: ${rh(1)}px;
`
export const NewAccountText = styled.Text`
font-size: ${rs(14)}px;
color: ${Colors.textColor};
`
export const NewAccountBtn = styled.TouchableOpacity`
margin-left: ${rw(1)}px;
`
export const SignUpText = styled.Text`
font-size: ${rs(14)}px;
color: ${Colors.textColor};
text-decoration: underline;
`