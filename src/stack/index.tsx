import Home from "src/screen/home"
import Test from "src/screen/test"
import { StackParam } from "src/type/StackParam"

export const defaultScreenOptions = { headerShown: false }
export const initalStack = "Home"

export const defaultStack = [
	{
		name: "Home" as keyof StackParam,
		component: Home,
	},
	{
		name: "Test" as keyof StackParam,
		component: Test,
	},
]