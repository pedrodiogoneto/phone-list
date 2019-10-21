export const GET_PHONES_LIST = () => {
	return {
		type: 'GET_PHONES_LIST',
		payload: {
			loading: true
		}
	}
}

export const GET_PHONES_LOADING = () => {
	return {
		type: 'GET_PHONES_LOADING',
		payload: {
			loading: true
		}
	}
}
export const GET_PHONES_ERROR = (error) => {
	return {
		type: 'GET_PHONES_ERROR',
		payload: {
			loading: false,
			error: error
		}
	}
}
export const GET_PHONES_SUCCESS = () => {
	return {
		type: 'GET_PHONES_SUCCESS',
		payload: {
			loading: false
		}
	}
}

