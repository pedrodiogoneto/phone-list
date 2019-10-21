import axios from 'axios'
const API_BASE_ADDRESS = 'https://phone-list-server.herokuapp.com';

export default class api {
	static getPhonesList() {
		const uri = `${API_BASE_ADDRESS}/phone`
		return axios.get(uri)
	}
}
