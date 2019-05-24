import React from 'react';
import './Header.css';

const Thumbnail = props => {
	return (
		<div  className="thumbnail">
			<img className="crest" src={require('../images/lambdacrest.png')} />
   	</div>
	);
}

export default Thumbnail;
