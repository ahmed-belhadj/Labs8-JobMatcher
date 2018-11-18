import React from "react";
import { Container, Row } from "reactstrap";
import { Route, Switch } from "react-router-dom";
import Auth from "../features/auth/container/Auth";
import ProtectedPages from "../features/auth/container/ProtectedPages";
import Testing from "../features/testing/container";
import NavBar from "../features/Navigation/component/NavBar";
import Matches from "../features/Matches/component/Matches";
import Landing from "../layouts/landingPage/Landing";
import Billing from "../features/Billing/Billing";

export default class Layout extends React.Component {
	render() {
		return (
			<div>
				<NavBar />
				<Route path="/" exact component={Landing} />
				<Container>
					<Row>
						<Switch>
							<Route path="/auth" component={Auth} />
							<Route path="/billing" component={Billing} />
							<Route path="/matches" component={Matches} />
							<Route
								path="/testing"
								exact
								component={ProtectedPages(Testing)}
							/>
						</Switch>
					</Row>
				</Container>
			</div>
		);
	}
}