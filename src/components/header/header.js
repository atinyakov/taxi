import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import PropTypes from 'prop-types';
import { appContext, userContext } from '../context';
import { Link, Route } from 'react-router-dom';



const useStyles = makeStyles(theme => ({
    title: {
        flexGrow: 1,
    },
}));


const Header = () => {
    const classes = useStyles();
    // const { toggleLogginPopup, toggleMap, toggleProfile } = useContext(appContext);
    const { logout } = useContext(appContext);

    const { isLoggedIn } = useContext(userContext);

    return (
        <div>
            <AppBar data-testid="header">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Loft Taxi
                    </Typography>
                    {/* <Button
                        color="inherit"
                        disabled={!isLoggedin}
                        onClick={toggleMap}>
                        Карта
                    </Button> */}
                    <Link to="/map" ><Button
                        color="inherit"
                    // disabled={!isLoggedin}
                    // onClick={toggleMap}
                    >
                        Карта
                    </Button></Link>
                    <Link to="/profile" ><Button
                        color="inherit"
                        // disabled={!isLoggedIn}
                    // onClick={toggleProfile}
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

// Header.propTypes = {
//     handleClick : PropTypes.func,
//     login : PropTypes.func,
//     showMap : PropTypes.func
// };

export default Header;