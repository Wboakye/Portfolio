import React from "react";
import { Link } from "react-router-dom";
import mainImage from "../../img/mainImage.jpg";

import "../../styles/demo.css";

export default class MainPic extends React.Component {
	render() {
		return (
			<div>
				<img
					className="w-100 p-0 rounded shadow"
					id="mainImage"
					src={mainImage}
				/>

				<Link to="/">
					<button className="btn btn-primary">Back home</button>
				</Link>
			</div>
		);
	}
}
