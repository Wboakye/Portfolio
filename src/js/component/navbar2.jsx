import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export default class Navbar2 extends React.Component {
	render() {
		return (
			<nav className="navbar fixed-top navbar-dark bg-transparent">
				<Link to="/">
					<span className="navbar-brand mb-0 h1" id="roText">
						<h3>
							<i>WILLIAM BOAKYE</i>
						</h3>
					</span>
				</Link>
				<span className="navbar-brand ml-auto" id="navColor">
					<h1>
						<b>
							<div className="row mt-2">
								<div className="col-sm">
									<i
										className="fab fa-facebook-f mx-1"
										id="homeButton2"
									/>
									<i
										className="fab fa-instagram mx-1"
										id="homeButton2"
									/>
									<i
										className="far fa-envelope mx-1"
										id="homeButton2"
									/>
								</div>
							</div>
						</b>
					</h1>
				</span>
			</nav>
		);
	}
}
