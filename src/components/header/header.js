import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import PropTypes from 'prop-types';
import { appContext, userContext } from '../context';



const useStyles = makeStyles(theme => ({
    title: {
        flexGrow: 1,
    },
}));


const Header = () => {
    const classes = useStyles();
    const { toggleLogginPopup, toggleMap, toggleProfile } = useContext(appContext);
    const isLoggedin = useContext(userContext);

    return (
        <div>
            <AppBar>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Loft Taxi
                    </Typography>
                    <Button
                        color="inherit"
                        disabled={!isLoggedin}
                        onClick={toggleMap}>
                        Карта
                    </Button>
                    <Button
                        color="inherit"
                        disabled={!isLoggedin}
                        onClick={toggleProfile}>
                        Профиль
                    </Button>
                    <Button
                        color="inherit"
                        onClick={toggleLogginPopup}>
                        {isLoggedin ? 'Выйти' : 'Войти'}
                    </Button>
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