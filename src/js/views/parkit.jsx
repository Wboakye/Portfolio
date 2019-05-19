import React, { Component } from "react";
import { Link } from "react-router-dom";
import ParkitAppPic from "../../img/ParkitAppPic.jpg";
import PIAHomeM from "../../img/PIAHomeM.jpg";
import PIAMap from "../../img/PIAMap.jpg";
import PIASignUp from "../../img/PIASignUp.jpg";
import PIASignUpM from "../../img/PIASignUpM.jpg";
import Footer from "../component/footer.jsx";
import Navbar2 from "../component/navbar2.jsx";
import "../../styles/home.css";

export class Parkit extends Component {
	render() {
		return (
			<div>
				<Navbar2 />
				<div className="container-fluid vh-100">
					<div className="row mt-5 pt-5">
						<div className="col-12 text-center mt-1">
							<h1 id="parkitTitle">Park.it</h1>
						</div>
					</div>
					<div className="row justify-content-center mt-3 mb-4 ">
						<div className="col-1 px-0 text-center">
							<i className="fab fa-js-square fa-2x" />
						</div>
						<div className="col-1 px-0  text-center">
							<i className="fab fa-react fa-2x" />
						</div>
						<div className="col-1 px-0 text-center">
							<i className="fab fa-python fa-2x" />
						</div>
					</div>

					<div className="row mt-3 mb-5">
						<div className="col-12 p-0">
							<img
								src={ParkitAppPic}
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
									A location fully responsive based web
									application built using React.js, and
									Django/Python. Park.it allows the end-user
									to search for nearby parking locations,
									verify ability, and store frequently visited
									locations for future reference. The
									application integrates with a 3rd party API
									for parking information, as well as the
									Google Maps API. It also permits user
									authentication and user profiles.{" "}
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
									src={PIAMap}
									alt="Avatar"
									className="image rounded shadow-lg"
									id="portImage"
								/>
							</div>
							<div className="col-sm-6 my-3">
								<img
									src={PIASignUp}
									alt="Avatar"
									className="image rounded shadow-lg"
									id="portImage"
								/>
							</div>
						</div>
						<div className="row vh-50">
							<div className="col-sm-6 my-3 d-flex justify-content-center">
								<img
									src={PIAHomeM}
									alt="Avatar"
									className="image rounded shadow-lg w-50"
									id="portImage"
								/>
							</div>
							<div className="col-sm-6 my-3 d-flex justify-content-center">
								<img
									src={PIASignUpM}
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
