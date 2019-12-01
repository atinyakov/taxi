import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Logo } from "loft-taxi-mui-theme";
import { connect } from "react-redux";
import { logout } from "../../action";

const useStyles = makeStyles(() => ({
  bar: {
    backgroundColor: "#fff"
  },
  title: {
    flexGrow: 1
  }
}));

const Header = ({ isLoggedIn, logout }) => {
  const classes = useStyles();

  return (
    <div>
      <AppBar data-testid='header' className={classes.bar}>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            <Logo />
          </Typography>
          <Button component={Link} to='/map'>Карта</Button>
          <Button component={Link} to='/profile' color="inherit">Профиль</Button>
          <Button component={Link} to='/' onClick={logout}>{isLoggedIn ? "Выйти": "Войти"}</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(logout());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
