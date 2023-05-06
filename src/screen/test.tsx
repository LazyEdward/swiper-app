import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StyledText, StyledTouchableOpacity, StyledView } from "src/StyledComponent";
import StyledSafeArea from "src/component/StyledSafeArea";
import { HomeButton } from "src/component/icon/home";
import { PlusButton } from "src/component/icon/plus";
import { useAppDispatch, useAppSelector } from "src/hooks/storeTypedHook";
import { useStackNav } from 'src/hooks/useStackNav';
import { RootState } from "src/store/store";
import { getCount, getError, getIsOn, getLoading, add, trigger } from "src/store/test";

const useTest = () => {
	const {
		on,
		counter,
		loading,
		error
	} = useAppSelector((state: RootState) => ({
		on: getIsOn(state.test),
		counter: getCount(state.test),
		loading: getLoading(state.test),
		error: getError(state.test),
	}))

	return {
		on,
		counter,
		loading,
		error
	}
}

const Test = () => {
	const navigation = useStackNav()
	
	const dispath = useAppDispatch()

	const {
		on,
		counter,
		loading,
		error
	} = useTest()

	return (
		<StyledSafeArea areaClassName="justify-center items-center w-full h-full bg-green-300">
			<StyledText className="text-red-600 m-2">{`This is Test count: ${loading ? "loading" : counter}`}</StyledText>
			<StyledView className="my-2 flex-row items-center">
				<StyledTouchableOpacity className="flex justify-center items-center mx-2 p-2 w-[40] h-[40] rounded-full bg-blue-300" onPress={() => navigation.navigate("Home")}>
					{/* <StyledText className="text-white">Click me Home</StyledText> */}
					<HomeButton height="135%" width="135%" className="text-white"/>
				</StyledTouchableOpacity>				
				<StyledTouchableOpacity className="mx-2 p-2 rounded-md bg-yellow-700 " onPress={() => dispath(trigger(null))}>
					<StyledText className="text-white">{on ? "OFF" : "ON"}</StyledText>
				</StyledTouchableOpacity>
				<StyledTouchableOpacity className={`flex justify-center items-center mx-2 p-2 w-[40] h-[40]`} disabled={!on} onPress={() => dispath(add())}>
					{/* <StyledText className="text-white">Add</StyledText> */}
					<PlusButton height="150%" width="150%" className={`${on ? "text-purple-400" : "text-slate-400"}`}/>
				</StyledTouchableOpacity>
			</StyledView>
		</StyledSafeArea>
	)
}

export default Test