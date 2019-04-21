import React from "react";
import { Link } from "react-router-dom";
import MainImage from "../../img/mainImage.jpg";
import MainPic from "../component/MainPic.jsx";
import Navbar2 from "../component/navbar2.jsx";

import "../../styles/home.css";

import mainImage from "../../img/mainImage.jpg";
import beachPic from "../../img/beachpic.jpeg";

export class Demo extends React.Component {
	render() {
		return (
			<div className="p-3">
				<Navbar2 />

				<div className="row">
					<div className="col-md-6">
						<MainPic />
					</div>
					<div className="col-md-6 pt-3">
						<div className="row">
							<div className="col-sm-6 mb-1 px-1">
								<div className="portContainer">
									<img
										src={MainImage}
										alt="Avatar"
										className="image"
										id="portImage"
									/>
									<div className="overlay">
										<div className="text">Hello World</div>
									</div>
								</div>
							</div>
							<div className="col-sm-6 mb-1 px-1">
								<div className="portContainer">
									<img
										src={MainImage}
										alt="Avatar"
										className="image"
										id="portImage"
									/>
									<div className="overlay">
										<div className="text">Hello World</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-6 mb-1 px-1">
								<div className="portContainer">
									<img
										src={MainImage}
										alt="Avatar"
										className="image"
										id="portImage"
									/>
									<div className="overlay">
										<div className="text">Hello World</div>
									</div>
								</div>
							</div>
							<div className="col-sm-6 mb-1 px-1">
								<div className="portContainer">
									<img
										src={MainImage}
										alt="Avatar"
										className="image"
										id="portImage"
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
