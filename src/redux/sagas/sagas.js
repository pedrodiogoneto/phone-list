import { put, takeLatest } from 'redux-saga/effects'
import api from '../api'

async function fetchAsync(func) {
	const response = await func();
	if (response.status === 200) return response.data
	throw new Error("Unexpected error!!!");
}

function* fetchPhones() {
	try {
		yield put({type: 'GET_PHONES_LOADING', payload: { loading: true } });   
		let phonesList = yield fetchAsync(api.getPhonesList);
		yield put({type: 'GET_PHONES_SUCCESS', data: phonesList, payload: { loading: true }});
	} catch (e) {
		yield put({type: 'GET_PHONES_ERROR', payload: { loading: true, error: e.message } });
	}
}

export function* phonesSaga() {
	yield takeLatest('GET_PHONES_LIST', fetchPhones)
}

export default phonesSaga;
