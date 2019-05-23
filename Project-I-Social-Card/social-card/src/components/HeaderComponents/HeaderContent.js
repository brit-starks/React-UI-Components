import React from 'react';
import './Header.css';

const HeaderContent = props => {
	return (
		<div  className="headerContent">
			<h1>Lambda School <span className="info">@LambdaSchool 26 jan</span></h1>
			<p>Let's Learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!</p>
    </div>
	);
}

export default HeaderContent;
