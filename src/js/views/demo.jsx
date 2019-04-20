import React from "react";
import { Link } from "react-router-dom";
import MainPic from "../component/MainPic.jsx";

import "../../styles/demo.css";

import mainImage from "../../img/mainImage.jpg";

export class Demo extends React.Component {
	render() {
		return (
			<div className="container p-0 mx-0 " id="wrapper">
				<div className="row">
					<div className="col-lg-6" id="col1">
						<MainPic />
					</div>
					<div className="col-lg-6" id="col2">
						<div className="row">
							<div className="col-6">
								<div id="container">
									<img
										className="w-100 p-0 mt-3 mb-3"
										id="mainImage"
										src={mainImage}
									/>
									<div className="overlay">
										<div className="text">Hello World</div>
									</div>
								</div>
							</div>

							<div className="col-6">
								<div id="container">
									<img
										className="w-100 p-0 mt-3 mb-3"
										id="mainImage"
										src={mainImage}
									/>
									<div className="overlay">
										<div className="text">Hello World</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-6">
								<div id="container">
									<img
										className="w-100 p-0 mt-3 mb-3"
										id="mainImage"
										src={mainImage}
									/>
									<div className="overlay">
										<div className="text">Hello World</div>
									</div>
								</div>
							</div>

							<div className="col-6">
								<div id="container">
									<img
										className="w-100 p-0 mt-3 mb-3"
										id="mainImage"
										src={mainImage}
									/>
									<div className="overlay">
										<div className="text">Hello World</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
