import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import {logout} from '../../action';

const useStyles = makeStyles(theme => ({
    title: {
        flexGrow: 1,
    },
}));


const Header = ({ isLoggedIn, logout }) => {
    const classes = useStyles();

    return (
        <div>
            <AppBar data-testid="header">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Loft Taxi
                    </Typography>
                    <Link to="/map" ><Button
                        color="inherit"
                    // disabled={!isLoggedin}
                    // onClick={toggleMap}
                    >
                        Карта
                    </Button></Link>
                    <Link to="/profile" ><Button
                        color="inherit"
                    >
                        Профиль
                    </Button>
                    </Link>
                    <Link to="/map" >
                        <Button
                            color="inherit"
                            onClick={logout}
                        >
                            {isLoggedIn ? <Link to="/" >Выйти</Link> : 'Войти'}
                        </Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.loginHandler.isLoggedIn
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            dispatch(logout());
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)