import React, { Component } from "react";
import { Link } from "react-router-dom";
import RoPortPic from "../../img/RolandoPortfolioPic.png";
import RoAboutMe from "../../img/RoAboutMe.png";
import RoPortPicM from "../../img/RoPortPicM.png";
import RoExamples from "../../img/RoExamples.png";
import RoExamplesM from "../../img/RoExamplesM.jpg";
import Footer from "../component/footer.jsx";
import Navbar2 from "../component/navbar2.jsx";
import "../../styles/home.css";

export class RoPortfolio extends Component {
	render() {
		return (
			<div>
				<Navbar2 />
				<div className="container-fluid vh-100">
					<div className="row mt-5 pt-5">
						<div className="col-12 text-center mt-1">
							<h1 id="parkitTitle">Photographer Portfolio</h1>
						</div>
					</div>
					<div className="row justify-content-center mt-3 mb-4 ">
						<div className="col-1 px-0 text-center">
							<i className="fab fa-js-square fa-2x" />
						</div>
						<div className="col-1 px-0  text-center">
							<i className="fab fa-html5 fa-2x" />
						</div>
						<div className="col-1 px-0 text-center">
							<i className="fab fa-css3-alt fa-2x" />
						</div>
					</div>

					<div className="row mt-3 mb-5">
						<div className="col-12 p-0">
							<img
								src={RoPortPic}
								alt="Avatar"
								className="image shadow-lg"
								id="portImage"
							/>
						</div>
					</div>
					<div className="container mt-5">
						<div className="row justify-content-center border rounded my-5">
							<div className="col-9 p-3">
								<p id="parkitP">
									A portfolio highligting the various
									strengths of this South Florida
									photographer. This responsive static site
									uses HTML5, CSS3, and JavaScript to provide
									a rich colorful experience - indicative his
									strength, style, and ability.{" "}
								</p>
							</div>
							<div className="col-4">
								<a
									href="https://github.com/wboakye/parkingapp"
									className="btn btn-secondary rounded-0"
									role="button"
									aria-disabled="true">
									To GitHub Repo
								</a>
								<Link to="/demo">
									<button
										type="button"
										className="btn btn-outline-secondary rounded-0">
										Go Back
									</button>
								</Link>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-6 my-3">
								<img
									src={RoExamples}
									alt="Avatar"
									className="image rounded shadow-lg"
									id="portImage"
								/>
							</div>
							<div className="col-sm-6 my-3">
								<img
									src={RoAboutMe}
									alt="Avatar"
									className="image rounded shadow-lg"
									id="portImage"
								/>
							</div>
						</div>
						<div className="row vh-50">
							<div className="col-sm-6 my-3 d-flex justify-content-center">
								<img
									src={RoPortPicM}
									alt="Avatar"
									className="image rounded shadow-lg w-50"
									id="portImage"
								/>
							</div>
							<div className="col-sm-6 my-3 d-flex justify-content-center">
								<img
									src={RoExamplesM}
									alt="Avatar"
									className="image rounded shadow-lg w-50"
									id="portImage"
								/>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
