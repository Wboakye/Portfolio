import React, { Component } from "react";
import MePic from "../../img/MePic.jpg";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import Navbar2 from "../component/navbar2.jsx";
import Footer from "../component/footer.jsx";

export class AboutMe extends Component {
	render() {
		let bio = [
			"Here comes the bio...",
			"Born and raised in Broward, Florida, where the sun is rich and the food has sabor, I spent much of my early life working in retail and customer service.",
			"In 2015 I moved south to Miami where I eventually joined the U.S. Air Force Researve and began working as an avionics technician on the F-16 Fighting Falcon.",
			"Simultaneously, I began teaching myself how to code, and eventually enrolled into a Web Development bootcamp (4Geeks Academy) which served as a catalyst in my development carreer."
		];
		return (
			<div id="aboutMeWrapper">
				<Navbar2 />
				<div className="container mt-4 pt-4">
					<div className="row mt-3 pt-3">
						<div className="col-md-12 my-2 d-flex justify-content-center ">
							<img
								src={MePic}
								alt="Avatar"
								className="image rounded-circle shadow-lg w-50"
								id="portImage"
							/>
						</div>
						<div className="col-md-12 my-2 text-center ">
							<h1>{bio[0]}</h1>
						</div>
					</div>
					<div className="row my-3">
						<div className="col-md-4 text-center">
							<i className="fas fa-umbrella-beach fa-3x" />
							<p>{bio[1]}</p>
						</div>
						<div className="col-md-4 text-center">
							<i className="fas fa-fighter-jet fa-3x" />
							<p>{bio[2]}</p>
						</div>
						<div className="col-md-4 text-center">
							<i className="fas fa-laptop-code fa-3x" />
							<p>{bio[3]}</p>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
