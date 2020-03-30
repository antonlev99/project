import React from 'react';


const Navigation = ({onRouteChange, isSignedIn}) => {
		if (isSignedIn) {
			return(
				<nav style={{display: 'flex', justifyContent:'flex-end', background: 'grey', opacity: '0.7', height: '90px'}}>
				    <p className='f3 link dim black underline pa3 pointer'>
				    	<a href="https://www.youtube.com/watch?v=NmbBMVEzaMg" className='black' target="_blank" rel="noopener noreferrer">About</a>
				    </p>
					<p className='f3 link dim black underline pa3 pointer'>
				    	<a href="https://docs.google.com/document/d/1x4WOwgXA-WExopWsNMkodsdN6mnEGP8YfKF6xPXqqI4/edit?usp=sharing" className='black' target="_blank" rel="noopener noreferrer">Terms And Conditions</a>
				    </p>
					<p onClick={() => onRouteChange('SignOut')} className='f3 link dim black underline pa3 pointer'>Sign out</p>
				</nav>
			);
		} else {
			return(
				<nav style={{display: 'flex', justifyContent:'flex-end', background: 'grey', opacity: '0.7', height: '90px'}}>
					<p onClick={() => onRouteChange('SignIn')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
					<p onClick={() => onRouteChange('Register')} className='f3 link dim black underline pa3 pointer'>Register</p>
				</nav>
			);
		}
}

export default Navigation;