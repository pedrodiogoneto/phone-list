import React from 'react'
import { Modal } from 'react-bootstrap'
import styled from 'styled-components'

export default function PhoneModal({ showModal, phone, onClose }) {
	const imageSource = phone.imageFileName? require(`../images/${phone.imageFileName}`) : ''
	return (
		<Modal show={showModal} onHide={onClose}>
			<Modal.Header>
				<Modal.Title>				
					<h3>{phone.name}</h3>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
					<div>
						<p>{phone.description}</p> 
						<h6>Price:</h6>
						<p>{phone.price} €</p>
					</div>
					<PhoneImage
						src={imageSource}
						alt="First slide"
					/>
				</div>
				<h5>Manufacturer:</h5>
				<p>{phone.manufacturer}</p>
				<h6>Processor:</h6>
				<p>{phone.processor}</p>
				<h6>Ram:</h6>
				<p>{phone.ram}</p>
				<h6>Phone Screen</h6>
				<p>{phone.screen}</p>
				<h6>Available Color:</h6>
				<PhoneColor color={phone.color}/>
			</Modal.Body>
			<Modal.Footer>
				<CloseButtonWrapper>
					<button variant="secondary" onClick={onClose}>
						Close
					</button>
				</CloseButtonWrapper>
			</Modal.Footer>
		</Modal>
	)
}

const PhoneColor = styled.div`
  width: 25px;
  height: 25px;
  background-color: ${props => props.color};
  border: 1px solid black;
`

const CloseButtonWrapper = styled.button`
	width: 100%;
    margin: 0px auto;
`

const PhoneImage = styled.img`
	height: 250px
`