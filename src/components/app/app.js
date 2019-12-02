import React from "react";
import Header from "../Header";
import Popup from "../Popup";
import Map from "../Map";
import Profile from "../Profile";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Container, Box } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import { Logo } from "loft-taxi-mui-theme";
import Background from "../../img/bg/auth-bg.jpg";


const useStyles = makeStyles(() => ({
  authBg: {
    backgroundColor: "#000",
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover"
  },
  container: {
    maxWidth: "1000px",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  logoContainer: {
    width: "420px",
    display: "flex",
    justifyContent: "center"
  }
}));

const App = ({ isLoggedIn }) => {
  const classes = useStyles();

  return (
    <div className={classes.authBg}>
      <Container>
        <Box className={classes.container}>
          <Box className={classes.logoContainer}>
            <Logo white animated />
          </Box>
          <Header />

          <LoginPage isLoggedIn={isLoggedIn} />

          <Route path='/' exact component={Popup} />
          <Route path='/map' component={Map} />
          <Route path='/profile' component={Profile} />
        </Box>
      </Container>
    </div>
  );
};

let LoginPage = ({ isLoggedIn }) =>
  isLoggedIn ? (
    <Redirect to='/map' />
  ) : (
    <Redirect to='/' exact component={Popup} />
  );


const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn
  };
};

export default connect(mapStateToProps)(App);
