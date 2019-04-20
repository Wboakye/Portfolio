import React from "react";
import "../../styles/home.css";

export default class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar fixed-top navbar-light bg-transparent">
				<span className="navbar-brand ml-auto" id="navColor">
					<h1>
						<b>
							<div className="row mt-2">
								<div className="col-sm">
									<i
										className="fab fa-facebook-f mx-1"
										id="homeButton"
									/>
									<i
										className="fab fa-instagram mx-1"
										id="homeButton"
									/>
									<i
										className="far fa-envelope mx-1"
										id="homeButton"
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
