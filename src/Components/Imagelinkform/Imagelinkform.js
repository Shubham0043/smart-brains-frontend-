import React from'react';
import './Imagelinkform.css'
const Imagelinkform = ({onInputChange,onButtonsubmit}) => {
	return(
			<div>
				<p className='f3 moon-gray'>
				{'This Intelligent app will detect faces in your pics, try yourself!! '}
				</p>
				<div className='center'>
					 <div className='form center pa3 br4 shadow-5'>
					 	<input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange} />
					 	<button className='pa2 w-30 center grow pv2 ph3 dib white bg-light-blue' onClick={onButtonsubmit} > Detect Faces </button>
					 </div>
				</div>
			</div>
				
		);

}

export default Imagelinkform;
