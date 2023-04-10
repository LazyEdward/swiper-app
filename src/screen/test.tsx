import { StyledText, StyledTouchableOpacity, StyledView } from "src/StyledComponent";
import { useStackNav } from 'src/hooks/useStackNav';

const Test = () => {
	const navigation = useStackNav()

	return (
		<StyledView className="justify-center items-center w-full h-full bg-green-300">
			<StyledText className="text-red-600 m-2">This is Test</StyledText>
			<StyledTouchableOpacity className="p-2 rounded-md bg-blue-300" onPress={() => navigation.navigate("Home")}>
				<StyledText className="text-white">Click me Home</StyledText>
			</StyledTouchableOpacity>
		</StyledView>
	)
}

export default Test