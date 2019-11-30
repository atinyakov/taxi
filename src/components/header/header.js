import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Logo } from "loft-taxi-mui-theme";
import { connect } from "react-redux";
import { logout } from "../../action";

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1
  }
}));

const Header = ({ isLoggedIn, logout }) => {
  const classes = useStyles();

  return (
    <div>
      <AppBar data-testid='header'>
        <Toolbar>
          <Logo  className={classes.title} white animated />
          <Link to='/map'>
            <Button
              variant='contained'
              color='primary'
            >
              Карта
            </Button>
          </Link>
          <Link to='/profile'>
            <Button variant='contained' color='primary'>
              Профиль
            </Button>
          </Link>
          <Link to='/map'>
            <Button variant='contained' color='secondary' onClick={logout}>
              {isLoggedIn ? <Link to='/'>Выйти</Link> : "Войти"}
            </Button>
          </Link>
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
