import React from "react";
import { Link } from "react-router-dom";
import MainImage from "../../img/mainImage.jpg";
import MainPic from "../component/MainPic.jsx";
import Navbar2 from "../component/navbar2.jsx";
import PortfolioPic from "../../img/PortfolioPic.png";
import ParkitAppPic from "../../img/ParkitAppPic.jpg";
import RolandoPortfolioPic from "../../img/RolandoPortfolioPic.jpg";

import Footer from "../component/footer.jsx";

import "../../styles/home.css";

export class Demo extends React.Component {
	render() {
		return (
			<div className="container-fluid p-0" id="demoWrapper">
				<Navbar2 />
				<div className="row h-100 mt-4 " id="demoHeadWrapper">
					<div className="col-12 m-auto" id="demoHead">
						<h1 id="demoHeadText">Have a look around.</h1>
						<i className="fas fa-angle-down fa-2x" id="arrow" />
					</div>
				</div>

				<ul className="nav nav-pills justify-content-center" id="nav">
					<li className="nav-item mx-2">
						<i className="fab fa-html5 fa-3x " />
					</li>
					<li className="nav-item mx-2">
						<i className="fab fa-css3-alt fa-3x" />
					</li>
					<li className="nav-item mx-2">
						<i className="fab fa-js-square fa-3x" />
					</li>
					<li className="nav-item mx-2">
						<i className="fab fa-react fa-3x" />
					</li>
					<li classNane="nav-item mx-2">
						<i className="fab fa-python fa-3x" />
					</li>
				</ul>
				<div className="row mt-3 mx-0">
					<div className="col-lg-4 pt-3">
						<div className="portContainer">
							<img
								src={ParkitAppPic}
								alt="Avatar"
								className="image rounded shadow-lg"
								id="portImage"
							/>
							<div className="overlay rounded shadow-lg">
								<div className="text">Park.it</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 pt-3">
						<div className="portContainer">
							<img
								src={RolandoPortfolioPic}
								alt="Avatar"
								className="image rounded shadow-lg"
								id="portImage"
							/>
							<div className="overlay rounded shadow-lg">
								<div className="text">
									Photographer Portfolio
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 pt-3">
						<MainPic />
					</div>
				</div>

				<Footer />
			</div>
		);
	}
}
