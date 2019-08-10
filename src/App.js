import React from "react";

// Router
import { Router } from "@reach/router";

//components
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";

class App extends React.Component {
  state = {};
  render() {
    return (
      <Router>
        <NotFound path="/404" default />
        <Home path="/" />
        <Login path="/login" />
      </Router>
    );
  }
}

export default App;

{
  /* <Router>
  <NotFound path="/404" default />
  <Home path="/" />
  <About path="/about" />
  <Faq path="/faq" />
  <NextDeferredIncomeAnnuity path="/nextdeferredincomeannuity" />
  <Contact path="/contact" />
  <TermsOfUse path="/terms" />
  <PrivacyPolicy path="/privacy" />
  <SocialMediaGuidelines path="/social" />
</Router>; */
}

// import NotFound from './pages/NotFound';
// import Home from './pages/Home';
