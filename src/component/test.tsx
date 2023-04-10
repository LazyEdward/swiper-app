import { StyledText, StyledView } from "src/StyledComponent";

const Test = ({text}:any) => (
	<StyledView className="justify-center items-center w-full h-full bg-green-300 text-red-300">
		<StyledText>{text}</StyledText>
	</StyledView>
)

export default Test;