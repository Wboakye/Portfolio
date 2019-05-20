import React from "react";
import { Link } from "react-router-dom";
import MainImage from "../../img/mainImage.jpg";

import "../../styles/demo.css";

export default class MainPic extends React.Component {
	render() {
		return (
			<div className="portContainer">
				<img
					src="https://pro2-bar-s3-cdn-cf3.myportfolio.com/ce0757e3-eed3-4910-bf76-548f474e5007/e4f4291b-43eb-4d66-b8f7-ed2781113298_rw_1920.jpg?h=ddc566f64298389f41fda0b860acec16"
					alt="Avatar"
					className="image rounded shadow-lg"
					id="portImage"
				/>
				<div className="overlay rounded shadow-lg">
					<div className="text">Developing Page</div>
				</div>
			</div>
		);
	}
}
