import styled from 'styled-components/native';
import {Platform, StyleSheet} from 'react-native';
import {rh, rs, rw} from 'react-native-full-responsive';
import Colors from '../../../helpers/Color';


export const MainContainer = styled.View`
flex: 1;
background: ${Colors.theamColor};
`
export const HeaderContainer = styled.View`

justify-content: center;
align-items: center;
`
export const AppLogo = styled.Image`
height: ${rh(40)}px;
width: ${rw(60)}px;


`