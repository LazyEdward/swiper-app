import { Text, View, Button, TouchableOpacity } from 'react-native';
import { withExpoSnack, styled } from 'nativewind';
import { Svg } from 'react-native-svg';

export const StyledView = styled(View)
export const StyledText = styled(Text)
export const StyledTouchableOpacity = styled(TouchableOpacity)
export const StyledSvg = styled(Svg)

export const StyledContainer = (element:any) => withExpoSnack(element)