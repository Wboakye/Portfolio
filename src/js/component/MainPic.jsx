import React from "react";
import { Link } from "react-router-dom";
import mainImage from "../../img/mainImage.jpg";

import "../../styles/demo.css";

export default class MainPic extends React.Component {
	render() {
		return (
			<div className="p-3">
				<img
					className="w-100 rounded shadow"
					id="mainImage"
					src={mainImage}
				/>
			</div>
		);
	}
}
