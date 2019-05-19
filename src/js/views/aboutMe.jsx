import React, { Component } from "react";
import MePic from "../../img/MePic.jpg";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import Navbar2 from "../component/navbar2.jsx";
import Footer from "../component/footer.jsx";

export class AboutMe extends Component {
	render() {
		let bio =
			"I am a web developer who is eager to be part of and grow with a team who’s mission I am excited about. If you take a look at my github you’ll see that I enjoy spending my free time developing and building out projects in React.js and Django/Python and everything I do has an emphasis on being responsive and mobile first. I began my foray into development a few years ago out of pure curiosity, but eventually found myself doing it as a hobby. The only plausible next step for me would be to jump from self-learning to formal education. So, I enrolled into a full-stack web development bootcamp in Miami, 4Geeks Academy. There is where I learned the brunt of what I know now in regard to the field.";
		return (
			<div id="aboutMeWrapper">
				<Navbar2 />
				<div className="container mt-4 pt-4">
					<div className="row justify-content-center mt-3 pt-3">
						<div className="col-md-5 my-2">
							<img
								src={MePic}
								alt="Avatar"
								className="image rounded shadow-lg"
								id="portImage"
							/>
						</div>
						<div className="col-md-5 my-2">
							<p>{bio}</p>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
