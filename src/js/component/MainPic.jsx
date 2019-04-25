import React from "react";
import { Link } from "react-router-dom";
import MainImage from "../../img/mainImage.jpg";

import "../../styles/demo.css";

export default class MainPic extends React.Component {
	render() {
		return (
			<div className="portContainer">
				<img
					src={MainImage}
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
