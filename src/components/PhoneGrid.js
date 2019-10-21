import React from 'react'
import styled from 'styled-components'

export default function PhoneGrid({ phoneList, onClickPhone }) {

	const renderPhoneList = () => {
		if (!phoneList) return
		return phoneList.map(phone => (
			<PhoneWrapper key={phone.id} onClick={()=> onClickPhone(phone)}>
				<PhoneImage
					src={require(`../images/${phone.imageFileName}`)}
					alt="First slide"
				/>
				<div>{phone.name}</div>
			</PhoneWrapper>
		))
	}

	return <Wrapper>{renderPhoneList()}</Wrapper>
}

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

const PhoneWrapper = styled.div`
    padding: 5%;
    background-color: white;
    width: 25%
    border: 1px solid #8080801a;
    text-align: center;
    min-width: 200px;
`

const PhoneImage = styled.img`
    height: 100px
`