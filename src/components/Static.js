import React from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import './../stylesheet/Style.css';

export const ContainerTut =()=>{
	return(
		<div>
			<Container>
				I am a normal container
			</Container>
			<Container fluid>
				I am a fluid container
			</Container>
		</div>
		)
	}

export const RowTut =()=>{
	return(
		<div >
			<Container>
				<Row className='bg-dark text-light'> first Row</Row>
				<Row> Second Row</Row>
			</Container>
		</div>
	)
}

export const ColOrderTut =()=>{        {/* You can use breakpoints to change order depending upon screen size */}
	return(
		<div>
			<Container>
				<Row className='border border-warning border-3'>
					<Col md={{offset:5, order:5}} className='border border-dark text-info' > first col </Col>
					<Col md={{span:2, order:2}} className='border border-primary text-warning'> second col </Col>
					<Col md={{ order:1}} className='border border-dark text-danger'> third col </Col>
					<Col md={{ order:3}} className='border border-primary text-dark'> forth col </Col>
					<Col md={{ order:4}} className='border border-dark text-primary'> fifth col </Col>
				</Row>
			</Container>
		</div>
	)
}

export const StackTut =()=>{
	return(
		<div>
			<Stack gap={3}>
				<div className="bg-light border">First item</div>
				<div className="bg-light border">Second item</div>
				<div className="bg-light border">Third item</div>
			</Stack>
		</div>
	)
}