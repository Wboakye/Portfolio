import React, { Component } from "react";
import { Link } from "react-router-dom";

import LandingPg from "../../img/landingPg.png";
import Footer from "../component/footer.jsx";
import Navbar2 from "../component/navbar2.jsx";
import "../../styles/home.css";

export class LandingPgEx extends Component {
	render() {
		return (
			<div>
				<Navbar2 />
				<div className="container-fluid vh-100">
					<div className="row mt-5 pt-5">
						<div className="col-12 text-center mt-1">
							<h1 id="parkitTitle">
								Local Business Landing Page
							</h1>
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
								src={LandingPg}
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
									This is a small static landing page I made
									for a small Miami business who wanted to do
									a contest inorder to build public interest.
									The organization was able to register and
									generate nearly 150 leads.{" "}
								</p>
							</div>
							<div className="col-4">
								<a
									href="https://github.com/Wboakye/landingpg"
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
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
