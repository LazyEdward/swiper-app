import { Text, View, Button, TouchableOpacity } from 'react-native';
import { withExpoSnack, styled } from 'nativewind';

export const StyledView = styled(View)
export const StyledText = styled(Text)
export const StyledTouchableOpacity = styled(TouchableOpacity)

export const StyledContainer = (element:any) => withExpoSnack(element)