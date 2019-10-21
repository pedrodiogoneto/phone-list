import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import styled from 'styled-components'

export default function ControlledCarousel({phoneList, onClickPhone}) {
	const [index, setIndex] = useState(0);
	const [direction, setDirection] = useState(null);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
		setDirection(e.direction);
	};

	const renderCarouselItem = () => {
		if(!phoneList) return
		return phoneList.map(phone => {
			return (
				<Carousel.Item key={phone.id} style={{ maxHeight: '60%' }}>
					<ImageWrapper>
						<PhoneImage
							className="d-block"
							src={require(`../images/${phone.imageFileName}`)}
							alt="First slide"
							onClick={() => onClickPhone(phone)}
						/>
					</ImageWrapper>
					<Carousel.Caption>
						<Title>{phone.name}</Title>
					</Carousel.Caption>
				</Carousel.Item>
			)
		})
	}

	return (
		<Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
			{renderCarouselItem()}	
		</Carousel>
	);
}

const PhoneImage = styled.img`
	height: 400px;
`

const ImageWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 100px;
`

const Title = styled.h3`
	color: black
`