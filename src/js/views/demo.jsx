import React from "react";
import { Link } from "react-router-dom";
import MainImage from "../../img/mainImage.jpg";
import MainPic from "../component/MainPic.jsx";
import Navbar2 from "../component/navbar2.jsx";
import ParkitAppPic from "../../img/ParkitAppPic.png";
import RolandoPortfolioPic from "../../img/RolandoPortfolioPic.png";

import Footer from "../component/footer.jsx";

import "../../styles/home.css";

export class Demo extends React.Component {
	render() {
		let speach = [
			"Finding real-world solutions to digital problems isn't always easy.",
			"Thats why I'm here to help...",
			"I'm a problem solver.",
			"I'm a communicator.",
			"I'm skill chaser.",
			"I'm a web developer"
		];
		let explained = [
			"I do what I do for the endorphin rush of the accomplishment. I break overbearing problems into well-organized pieces, and in doing so, the small wins keep on coming.",
			"I'm curious. Some might even say I'm knowsey. I'm easily intrigued by things I don't know how to do. Leisure time for me is getting stuck in a 2 hour Wikipedia hole reading about all the possibilities of blockchain tech (true story)."
		];
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
							<Link to="/parkit">
								<div className="overlay rounded shadow-lg">
									<div className="text">
										<h5>Park.it</h5>
										<i className="fab fa-js-square fa-2x" />
										<i className="fab fa-react fa-2x" />
										<i className="fab fa-python fa-2x" />
									</div>
								</div>
							</Link>
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
							<Link to="/roportfolio">
								<div className="overlay rounded shadow-lg">
									<div className="text">
										<h5>Photographer Portfolio</h5>
										<i className="fab fa-html5 fa-2x " />
										<i className="fab fa-css3-alt fa-2x" />
										<i className="fab fa-js-square fa-2x" />
									</div>
								</div>
							</Link>
						</div>
					</div>
					<div className="col-lg-4 pt-3">
						<MainPic />
					</div>
				</div>
				<div className="container mt-5" id="demoSpeach">
					<div className="row">
						<div className="col-md-6 justify-content-center">
							<h3>
								<b>{speach[0]}</b>{" "}
							</h3>{" "}
							<h5>{speach[1]}</h5>
							<br />{" "}
						</div>
						<div className="col-md-6">
							<div>
								<h5>{speach[2]} </h5>
								<p>{explained[0]}</p>
							</div>
							<div>
								<h5>{speach[3]} </h5>
								<p>
									I have a <strike>prolonged</strike>{" "}
									<strike>drawn-out</strike>{" "}
									<b>distinguished</b> history in retail. What
									I gained from it was an industrial strength
									need to facilitate communication and common
									understanding.{" "}
								</p>
							</div>
							<div>
								<h5>{speach[4]} </h5>
								<p>{explained[1]}</p>
							</div>
						</div>
					</div>
					<div ClassName="row">
						<div className="col-12 text-center">
							<h2>
								<b>{speach[5]}</b>
								<br />
								<Link to="/aboutme">
									<button
										type="button"
										className="btn btn-outline-dark mt-3">
										Learn More About Me
									</button>
								</Link>
							</h2>
						</div>
					</div>
				</div>

				<Footer />
			</div>
		);
	}
}
