import React from 'react';
import Tilt from 'react-tilt';
import dog from './dog.png';
import './Logo.css';

const Logo = () => {
	return(
		<div className='ma4 mt0'>
			<Tilt className="Tilt br2 shadow-3" options={{ max : 55 }} style={{ height: 120, width: 120 }} >
 				<div className="Tilt-inner pa3"><img style={{flex: 'center', height: '90px', width: '100px'}} alt='logo' src={dog}/></div>
			</Tilt>
			<h1 className='f1'>PetWorld</h1>
			<br/><br/><br/>
		</div>
	);
}

export default Logo;