import React, { Component } from "react";
import "../../styles/home.css";

export default class Footer extends Component {
	render() {
		return (
			<footer className="footer mt-5 py-3 text-center" id="footer">
				<p>
					Lets work together. <br />
					<i className="fas fa-camera" />
				</p>
			</footer>
		);
	}
}
