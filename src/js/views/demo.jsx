import React from "react";
import { Link } from "react-router-dom";
import MainImage from "../../img/mainImage.jpg";
import MainPic from "../component/MainPic.jsx";
import Navbar2 from "../component/navbar2.jsx";
import BeachPic from "../../img/beachpic.jpeg";

import "../../styles/home.css";

export class Demo extends React.Component {
	render() {
		return (
			<div className="container" id="demoWrapper">
				<Navbar2 />
				<div className="row h-100 mt-4 " id="demoHeadWrapper">
					<div className="col-12 m-auto" id="demoHead">
						<h1 id="demoHeadText">Have a look around.</h1>
						<i className="fas fa-angle-down fa-2x" id="arrow" />
					</div>
				</div>

				<div className="row mt-3 mx-0">
					<div className="col-md-6 pt-3">
						<MainPic />
					</div>
					<div className="col-md-6">
						<div className="row">
							<div className="col-sm-6 p-3">
								<div className="portContainer" />
							</div>
							<div className="col-sm-6 p-3">
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
							</div>
						</div>
						<div className="row">
							<div className="col-sm-6 p-3">
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
							</div>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-md-6">
						<div className="row">
							<div className="col-sm-6 p-3">
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
							</div>
							<div className="col-sm-6 p-3">
								<div className="portContainer" />
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="row">
							<div className="col-sm-6 p-3">
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
							</div>
							<div className="col-sm-6 p-3">
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
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
