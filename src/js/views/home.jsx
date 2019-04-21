import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import Navbar from "../component/navbar.jsx";

export class Home extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
				<header id="header">
					<div id="imageWrapper" />
					<div className="container h-100">
						<div className="d-flex h-100 text-center align-items-center">
							<div className="w-100 text-white">
								<h1 className="display-3" id="homeText">
									ROLANDO RODRIGUEZ
								</h1>
								<br />
								<ul
									className="nav nav-pills nav-justified"
									id="nav">
									<li className="nav-item">
										<Link to="/demo">
											<span>
												<a
													className="mx-1"
													id="homeButton">
													<h3>Enter</h3>
												</a>
											</span>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</header>
			</div>
		);
	}
}
