import React from "react";
import { Link } from "react-router-dom";
import PortfolioPic from "../../img/PortfolioPic.png";

import "../../styles/demo.css";

export default class PortfolioComp extends React.Component {
	render() {
		return (
			<div className="portContainer">
				<img
					src={PortfolioPic}
					alt="Avatar"
					className="image rounded shadow-lg"
					id="portImage"
				/>
				<div className="overlay rounded shadow-lg">
					<div className="text">Hello World</div>
				</div>
			</div>
		);
	}
}
