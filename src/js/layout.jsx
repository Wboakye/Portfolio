import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./views/home.jsx";
import { Demo } from "./views/demo.jsx";
import { Parkit } from "./views/parkit.jsx";
import { RoPortfolio } from "./views/roPortfolio.jsx";
import { AboutMe } from "./views/aboutMe.jsx";
import { LandingPgEx } from "./views/landingPgEx.jsx";

import { Single } from "./views/single.jsx";
import injectContent from "./store/appContext.jsx";
import "../styles/home.css";

import { CSSTransition, TransitionGroup } from "react-transition-group";

export class Layout extends React.Component {
	render() {
		return (
			<div className="d-flex flex-column p-0" id="mainWrapper">
				<BrowserRouter>
					<Route
						render={location => (
							<TransitionGroup>
								<CSSTransition
									key={window.location}
									timeout={300}
									classNames="fade">
									<Switch>
										<Route
											exact
											path="/"
											component={Home}
										/>
										<Route path="/demo" component={Demo} />
										<Route
											path="/parkit"
											component={Parkit}
										/>
										<Route
											path="/roportfolio"
											component={RoPortfolio}
										/>
										<Route
											path="/landingpgex"
											component={LandingPgEx}
										/>
										<Route
											path="/aboutme"
											component={AboutMe}
										/>
										<Route
											path="/single/:theid"
											component={Single}
										/>
										<Route
											render={() => <h1>Not found!</h1>}
										/>
									</Switch>
								</CSSTransition>
							</TransitionGroup>
						)}
					/>
				</BrowserRouter>
			</div>
		);
	}
}

export default injectContent(Layout);
