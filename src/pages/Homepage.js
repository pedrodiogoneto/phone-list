import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { GET_PHONES_LIST } from '../redux/actions/actions'

import { connect } from 'react-redux';

const Homepage = (props) => {
	const [phoneList, setPhoneList] = useState([])


	useEffect(() => { props.GET_PHONES_LIST() }, [])

	useEffect(() => { setPhoneList(props.data) }, [props.data])

	const handleClick = () => props.GET_PHONES_LIST()

	const renderPhoneList = () => {
		if (!phoneList) return
		console.log('asdfasdfasdf', phoneList);
		return phoneList.map(phone => <div>{phone.name}</div>)
	}

	console.log('asdf', props, phoneList);
	return(
		<div>
			<button onClick={() => handleClick()}>asdasfdasdfasdgf</button>
			{ phoneList && renderPhoneList() }
		</div>
	)
}

const mapDispatchToProps = dispatch => ({
	GET_PHONES_LIST: () => dispatch(GET_PHONES_LIST())
})

const mapStateToProps = state => ({
	data: state.data,
	loading: state.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)