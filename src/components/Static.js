import React from 'react';
import { Button, Col, Container, Row, Stack, Form, FormGroup, FormLabel, FormControl, FormRange, FormSelect, FormCheck, InputGroup } from 'react-bootstrap';
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
			<Container fluid>
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
			<Stack direction={'horizontal'} gap={3}>
				
				<Form.Control className="ms-5" placeholder="Add your item here..." />
				<Button variant='success'>Search</Button>
				<div className='vr'></div>
				<Button variant='outline-danger' >Reset</Button>
				
			</Stack>
		</div>
	)
}

export const FormTutPartOne =()=>{
	return(
		<div>
			<Container>
				<Form > {/* validated */}
					<FormGroup className='mb-3' >
						<FormLabel > Email </FormLabel> {/* visuallyHidden */}
						<FormControl isInvalid type='email' placeholder='Enter your Email Address'  ></FormControl> {/* feedback plaintext readOnly defaultValue */}
					</FormGroup>

					<FormGroup className='mb-3'>
						<FormLabel> Password </FormLabel>
						<FormControl size='lg' type='password' placeholder='Enter your Password' disabled ></FormControl>
					</FormGroup>

					{/* <FormGroup className='mb-3'>
						<FormLabel> Info </FormLabel>
						<FormControl className='mb-3' as='textarea' row='6' />
					</FormGroup> */}

					{/* <Form.Control isInvalid className='mb-3' type='file'/> */}

					<FormCheck className='mb-3' type='checkbox' label='Select Me' />
					<FormGroup>
						<FormCheck inline className='mb-3' name='radioType' type='radio' label='Select Me' />
						<FormCheck inline className='mb-3' name='radioType' type='radio' label='Select Me' />
					</FormGroup>
					<FormCheck type='switch' label='On/OFF' />

					<FormLabel>Range</FormLabel>
					<Form.Range/>
					
					<FormControl className='mb-3' defaultValue='#EF1823' type='color'/>

					<FormSelect >
						<option>Select</option>
						<option>one</option>
						<option>two</option>
						<option>three</option>
					</FormSelect>
						
					

					<Stack direction={'horizontal'} gap={3} className='mt-3'>
						<Button variant='success' disabled>Login</Button>
						<div className='vr '></div>
						<Button variant='outline-danger' className=' '>Reset Password</Button>
					</Stack>
					

				</Form>
			</Container>
		</div>
	)
}

export const FormTutPartTwo =()=>{
	return(
		<div>
			<Container>
				<Form>
					<InputGroup>
						<InputGroup.Text>@</InputGroup.Text>
						<FormControl placeholder='Email'/>
					</InputGroup>
				</Form>
			</Container>
		</div>
	)
}