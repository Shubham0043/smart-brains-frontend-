import React from'react';
import './Facerecognition.css'

const Facerecognition = ({ imageurl,box }) =>{
	return(
				<div className='center na'>
					<div className='absolute mt2'>
					<img id='inputimage' alt='' src={imageurl} width='500px' height='auto'/>
					<div className='bounding_box' style={{ left: box.leftCol, right:box.rightCol, top: box.topRow,  bottom: box.bottomRow }}></div>
					</div>					

				</div>
		);

}

export default Facerecognition;
