
import { StyledText, StyledTouchableOpacity, StyledView } from "src/StyledComponent";
import { useStackNav } from 'src/hooks/useStackNav';

const Home = () => {
	const navigation = useStackNav()

	return (
		<StyledView className="justify-center items-center w-full h-full">
			<StyledText className="m-2">Hello</StyledText>
			<StyledTouchableOpacity className="p-2 rounded-md bg-red-300" onPress={() => navigation.navigate("Test")}>
				<StyledText className="text-white">Test</StyledText>
			</StyledTouchableOpacity>
		</StyledView>
	)
}

export default Home