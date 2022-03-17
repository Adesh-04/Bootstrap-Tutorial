import React from 'react';
import './../stylesheet/Style.css';

export const ContainerTut =()=>{
	return(
			<div >
				<div className='container'>
					i am margined container
				</div> <br/>
				<div className='container-fluid'>
					i am non margined container
				</div>
			</div>
		)
	}

export const RowTut =()=>{
	return(
		<div className='container'>
			<div className='row'>
				i am a row
			</div><br/>
			<div className='row'>
				i am new row
			</div>

		</div>
	)
}