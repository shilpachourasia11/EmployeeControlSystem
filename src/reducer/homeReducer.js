import * as types from './../constants'

const homeReducer = ( state = {
	allEmployees: [],
	allJobs: [],
	dataReady: false,
	totalEmployeePages: 1,
	error: false,
	loading: false,
	jobDataReady: false
} , action) => {
	switch (action.type){
		case types.ALL_EMPLOYEE + "_FULFILLED":
		let total = 1
		if(action.payload.count>10){
			total = action.payload.count/10 + action.payload.count%10
		}
			state = {
				...state,
				allEmployees: action.payload.rows,
				dataReady: true,
				totalEmployeePages: total
			}
			return state
		case types.ALL_EMPLOYEE + '_REJECTED':
		return state
		case types.RESET:
			return state ={
				...state,
				dataReady: false,
				error: false
			}
		case types.GET_JOBS + "_FULFILLED":
			state = {
				...state,
				allJobs: action.payload.rows,
				jobDataReady: true,
			}
			return state
		default:
			return state
	}
}

export default homeReducer
