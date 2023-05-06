
import { Circle, Rect, Path } from 'react-native-svg';
import { StyledSvg } from 'src/StyledComponent';

// https://www.svgrepo.com/svg/506742/plus
export const PlusButton = ({...rest}: any) => (
	<StyledSvg height="100%" width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
		<Path fillRule="evenodd" clipRule="evenodd" d="M11 17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V13H17C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11H13V7C13 6.44771 12.5523 6 12 6C11.4477 6 11 6.44771 11 7V11H7C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H11V17Z" fill="currentColor"/>
	</StyledSvg>	
)