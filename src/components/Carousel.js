import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'

export default function ControlledCarousel({phoneList}) {
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
				<Carousel.Item key={phone.id} style={{ maxHeight: '400px' }}
				>
					<img
						className="d-block"
						src={require(`../images/${phone.imageFileName}`)}
						alt="First slide"
						style={{ maxHeight: '400px' }}
					/>
					<Carousel.Caption>
						<h3 style={{ color: 'black' }}>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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