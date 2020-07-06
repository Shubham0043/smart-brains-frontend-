import React from'react';

const Navigation = ({onroutechange, issignedin}) =>{
	
			if(issignedin){
				return(
				<nav style={{display: 'flex', justifyContent:'flex-end', padding: '20px, br1'}}>
				<p 
				className='f3 link dim balck underline pa5 pointer'
				 onClick={() => onroutechange('signin')}> Sign Out</p>
				</nav>
				);
			}
			else{
				return(
				<nav style={{display: 'flex', justifyContent:'flex-end', padding: '20px, br1'}}>
				<p 
				className='f3 link dim balck underline pa5 pointer'
				 onClick={() => onroutechange('register')}> Register</p>
				 <p 
				className='f3 link dim balck underline pa5 pointer'
				 onClick={() => onroutechange('signin')}> Sign In</p>
				</nav>
				);
				
			}
				
		

}

export default Navigation;
