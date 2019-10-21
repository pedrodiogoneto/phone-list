import {GET_PHONES_LIST, GET_PHONES_LOADING, GET_PHONES_SUCCESS, GET_PHONES_ERROR} from "../actions/actions";

const initialState = { phoneList: [],   loading: false,   error: '' };

export default function reduxSagaReducer(state = initialState, action) {
	console.log(action);
	switch (action.type) {
	case 'GET_PHONES_LIST': {
		return {
			...state,
			loading: action.payload.loading
		};
	}				
	case 'GET_PHONES_LOADING': {
		return {               
			...state,               
			loading: action.payload.loading
		};
	}       
	case 'GET_PHONES_SUCCESS': {
		return {               
			...state,               
			data: action.data,               
			loading: action.payload.loading       
		}       
	}       
	case 'GET_PHONES_ERROR': {
		return {
			...state,
			loading: action.loading,
			error: action.payload.error           
		};       
	}       
	default: {           
		return state;       
	}   
	}
}
