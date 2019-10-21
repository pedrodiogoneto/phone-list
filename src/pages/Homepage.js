import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { GET_PHONES_LIST } from '../redux/actions/actions'

import { connect } from 'react-redux';

import ControlledCarousel from '../components/Carousel'

const Homepage = (props) => {
	const [phoneList, setPhoneList] = useState([])


	useEffect(() => { props.GET_PHONES_LIST() }, [])

	useEffect(() => { setPhoneList(props.data) }, [props.data])

	const handleClick = () => props.GET_PHONES_LIST()

	const renderPhoneList = () => {
		if (!phoneList) return
		console.log('asdfasdfasdf', phoneList);
		return phoneList.map(phone => <div key={phone.id}>{phone.name}</div>)
	}

	console.log('asdf', props, phoneList);
	return(
		<div>
			<Title>PEDRO'S PHONES</Title>
			<button onClick={() => handleClick()}>asdasfdasdfasdgf</button>
			{ phoneList && renderPhoneList() }
			<CarouselWrapper>
				{ phoneList && <ControlledCarousel phoneList={phoneList} /> }
			</CarouselWrapper>
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


const CarouselWrapper = styled.div`
	max-height: 300px;
`

const Title = styled.h1`
	text-align: center
`