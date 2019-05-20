import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../styles/home.css";

export default class Footer extends Component {
	render() {
		return (
			<footer className="footer mt-5 p-3" id="footer">
				<div className="row p-3">
					<div className="col-sm-3 p-3" />
					<div className="col-sm-3">
						<div className="row">
							<div className="col text-center">
								<div className="my-3">
									<a
										className="far fa-envelope fa-2x"
										href="mailto:wboakye@gmail.com"
										id="footerLink"
									/>
								</div>
								<div className="my-3">
									<a
										className="fab fa-linkedin-in fa-2x"
										href="https://www.linkedin.com/in/william-boakye-064824a8/"
										id="footerLink"
									/>
								</div>
								<div className="my-3">
									<a
										className="fab fa-github fa-2x"
										href="https://github.com/wboakye"
										id="footerLink"
									/>
								</div>
							</div>
							<div className="col text-center">
								<div className="my-3">
									<a
										className="fab fa-instagram fa-2x"
										href="https://www.instagram.com/whataboutwill/"
										id="footerLink"
									/>
								</div>
								<div className="my-3">
									<a
										className="fab fa-twitter fa-2x"
										href="https://twitter.com/boakyetweets"
										id="footerLink"
									/>
								</div>
								<div className="my-3">
									<a
										className="fab fa-facebook-square fa-2x"
										href="https://www.facebook.com/wboakye"
										id="footerLink"
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-3">
						<h3>Contact Me:</h3>
						<p>
							I am always looking for new collaborations and
							opportunities to network. Feel free to reach out.
						</p>
						<Link to="/demo">
							<button
								type="button"
								className="btn btn-outline-secondary rounded-0">
								Home
							</button>
						</Link>
					</div>
					<div className="col-sm-3" />
				</div>
			</footer>
		);
	}
}
