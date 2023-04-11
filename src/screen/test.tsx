import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StyledText, StyledTouchableOpacity, StyledView } from "src/StyledComponent";
import StyledSafeArea from "src/component/StyledSafeArea";
import { useStackNav } from 'src/hooks/useStackNav';

const Test = () => {
	const navigation = useStackNav()
	
	return (
		<StyledSafeArea areaClassName="justify-center items-center w-full h-full bg-green-300">
			<StyledText className="text-red-600 m-2">This is Test</StyledText>
			<StyledTouchableOpacity className="p-2 rounded-md bg-blue-300" onPress={() => navigation.navigate("Home")}>
				<StyledText className="text-white">Click me Home</StyledText>
			</StyledTouchableOpacity>
		</StyledSafeArea>
	)
}

export default Test