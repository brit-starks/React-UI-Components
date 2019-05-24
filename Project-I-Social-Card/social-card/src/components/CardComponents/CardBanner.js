import React from 'react';
import './Card.css';

const CardBanner = props => {
	return (
		<div className="cardBanner">
			<img src={require("../images/calculator-component.png")} id="mid-img"/>
		</div>
	);
}

export default CardBanner;