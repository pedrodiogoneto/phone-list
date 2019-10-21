import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { GET_PHONES_LIST } from '../redux/actions/actions'

import { connect } from 'react-redux';

import ControlledCarousel from '../components/Carousel'
import PhoneGrid from '../components/PhoneGrid'
import { Spinner } from 'react-bootstrap';
import PhoneModal from '../components/PhoneModal'

const Homepage = (props) => {
	const [phoneList, setPhoneList] = useState([])
	const [showModal, setShowModal] = useState(false)
	const [selectedPhone, setSelectedPhone] = useState({})


	useEffect(() => { props.GET_PHONES_LIST() }, [])

	useEffect(() => { setPhoneList(props.data) }, [props.data])

	const handleSelectedPhone = (selectedPhone) => {
		setSelectedPhone(selectedPhone)
		setShowModal(true)
	}

	return(
		<div>
			<Title>PEDRO'S PHONES</Title>
			
			{ phoneList && selectedPhone && 
				<PhoneModal phone={selectedPhone} showModal={showModal} onClose={() => setShowModal(false)} />
			}
			
			{ !phoneList && props.loading && 
				<SpinnerWrapper>
					<Spinner animation="border" role="status">
						<span className="sr-only">Loading...</span>
					</Spinner> 
				</SpinnerWrapper>
			}

			{ phoneList && 
				<CarouselWrapper>
					<ControlledCarousel phoneList={phoneList} onClickPhone={(selectedPhone) => handleSelectedPhone(selectedPhone) }/>
				</CarouselWrapper>
			}

			{ phoneList && <PhoneGrid phoneList={phoneList} onClickPhone={(selectedPhone) => handleSelectedPhone(selectedPhone) }/> }
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
	height: 60%;
	margin-bottom: 5%;
	text-align: center;
`

const Title = styled.h1`
	text-align: center
`

const SpinnerWrapper = styled.div`
	text-align: center;
	margin-top: 25%
`