
import { StyledText, StyledTouchableOpacity, StyledView } from "src/StyledComponent";
import StyledSafeArea from "src/component/StyledSafeArea";
import { useStackNav } from 'src/hooks/useStackNav';

const Home = () => {
	const navigation = useStackNav()

	return (
		<StyledSafeArea areaClassName="justify-center items-center w-full h-full">
			<StyledText className="m-2">Hello</StyledText>
			<StyledTouchableOpacity className="p-2 rounded-md bg-red-300" onPress={() => navigation.navigate("Test")}>
				<StyledText className="text-white">Test</StyledText>
			</StyledTouchableOpacity>
		</StyledSafeArea>
	)
}

export default Home