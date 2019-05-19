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
									<a
										className="fab fa-github mx-1"
										href="https://github.com/wboakye"
										id="homeButton"
									/>
									<a
										className="fab fa-twitter mx-1"
										href="https://twitter.com/boakyetweets"
										id="homeButton"
									/>
									<a
										className="far fa-envelope mx-1"
										href="mailto:wboakye@gmail.com"
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
