import React from'react';
import Tilt from 'react-tilt';
import intelligence from './intelligence.png';
import './logo.css';
const Logo = () => {
	return(
				<div className='ma4 mt3'>
					<Tilt className="Tilt br2 shadow-2" options={{ max : 45 }} style={{ height: 150, width: 150 }} >
					<div className="Tilt-inner pa3"><img style={{paddingTop:'3px'}} alt='logo' src={intelligence}/> </div>
					</Tilt>
				</div>
		);

}

export default Logo;
