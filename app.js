import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { makeStyles, createStyles } from "@material-ui/core/styles";

import BackgroundImage from "./assets/throwback-confetti-background.jpg";

// COMPONENTS
import Appbar from "./components/appbar";
import Footer from "./components/footer";

// PAGES
import Home from "./pages/home";
import Roster from "./pages/roster";
import Transactions from "./pages/transactions";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundImage: `url(${BackgroundImage})`,
      minHeight: "100vh",
    },
  })
);

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Router>
        <Appbar />
        <Switch>
          <Route path="/transactions">
            <Transactions />
          </Route>
          <Route path="/roster">
            <Roster />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
