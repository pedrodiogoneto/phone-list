import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'

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
					<div style={{ display: 'flex', justifyContent: 'center', marginBottom: '100px' }}>
						<img
							className="d-block"
							src={require(`../images/${phone.imageFileName}`)}
							alt="First slide"
							style={{ height: '400px' }}
							onClick={() => onClickPhone(phone)}
						/>
					</div>
					<Carousel.Caption>
						<h3 style={{ color: 'black' }}>{phone.name}</h3>
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