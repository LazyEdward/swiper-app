import type { PayloadAction } from '@reduxjs/toolkit'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export type TestData = {
	on: boolean,
	counter: number
}

export type TestDataStatus = {
	loading: boolean,
	error: string | null
}

export type TestState = TestData & TestDataStatus

const initialState: TestState = {
	on: false,
	counter: 0,
	loading: false,
	error: null
}

const triggerWait = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({})
		}, 250)
	})
}

export const trigger = createAsyncThunk("test/trigger", async (_: any, thunkAPI) => {
	try {
		console.log("trigger")
		await triggerWait()
		return {}
	}
	catch (err: any) {
		return thunkAPI.rejectWithValue(err.message)
	}
})

const TestReducer = createSlice({
	name: "test",
	initialState,
	reducers: {
		add: (state) => {
			state.counter += 1
		}
	},
	extraReducers(builder) {
		builder
			.addCase(trigger.pending, (state) => {
				state.loading = true
				state.error = null
			})
			.addCase(trigger.fulfilled, (state) => {
				state.loading = false
				state.error = null
				state.on = !state.on
			}).addCase(trigger.rejected, (state, action: PayloadAction<any>) => {
				state.loading = false
				state.error = action.payload
			})		
	},
})

export const { add } = TestReducer.actions;

export const getIsOn = (state: TestState) => state.on
export const getCount = (state: TestState) => state.counter
export const getLoading = (state: TestState) => state.loading
export const getError = (state: TestState) => state.error

export default TestReducer.reducer