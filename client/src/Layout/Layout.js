import React from "react";
import { Container, Row } from "reactstrap";
import { Route, Switch } from "react-router-dom";
import Auth from "../features/auth/container/Auth";
import ProtectedPages from "../features/auth/container/ProtectedPages";
import Testing from "../features/testing/container";
import NavBar from "../features/nav/component/NavBar";
import Landing from "../layouts/landingPage/Landing";
import Billing from "../features/billing/component";
import ProfileContainer from "../features/forms/containers";
import BrowseContainer from "../features/profile/container";
import Job from "../features/job/component/Job";

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
              <Route path="/billing" component={ProtectedPages(Billing)} />
              <Route path="/rand" component={BrowseContainer} />
              {/* <Route
								path="/forms"
								component={ProtectedPages(ProfileContainer)}
							/> */}
              <Route
                path="/profile"
                component={ProtectedPages(ProfileContainer)}
              />
              <Route path="/job" component={ProtectedPages(Job)} />

              <Route path="/testing" exact component={Testing} />
            </Switch>
          </Row>
        </Container>
      </div>
    );
  }
}
