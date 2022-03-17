import React from 'react';
import './../stylesheet/Style.css';

export const ContainerTut =()=>{
	return(
			<div >
				<div className='container'>
					i am normal container
				</div> <br/>
				<div className='container-fluid'>
					i am a container-fluid
				</div>
			</div>
		)
	}

export const RowTut =()=>{
	return(
		<div className='container'>
			<div className='row row-cols-3'>    {/* row-cols-3 makes output of 3 col unit*/}
				<div className='col'>col 0</div>
				<div className='col'>col 1</div>
				<div className='col'>col 2</div>
				<div className='col'>col 3</div>
				<div className='col'>col 4</div>
				{/* <div className='w-100'><br/></div>			This adds a break */}
				<div className='col'>col 5</div>
				<div className='col'>col 6</div>
				<div className='col'>col 7</div>
				<div className='col'>col 8</div>
				<div className='col'>col 9</div>
			</div>
		</div>
	)
}

export const OrderTut =()=>{        {/* You can use breakpoints to change order depending upon screen size */}
	return(
		<div className='container'>
			<div className='row'>
				<div className='col bg-success'>order 0</div>
				<div className='col bg-primary order-last'>order 1</div>
				<div className='col bg-danger  order-md-5'>order 2</div>
				<div className='col bg-dark    text-light'>order 3</div> 			{/* try using inspect and size of sm or lower*/}
				<div className='col bg-light   order-md-3'>order 4</div>
				<div className='col bg-warning order-first'>order 5</div>
				<div className='col bg-secondary'>order 6</div>
			</div>
		</div>

	)
}