import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    // root: {
    //     flexGrow: 1,
    // },
    // menuButton: {
    //     marginRight: theme.spacing(2),
    // },
    title: {
        flexGrow: 1,
    },
}));


const Header = (props) => {
    const classes = useStyles();
    const {handleClick} = props;

    

    return (
        <div>
            <AppBar>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Loft Taxi
                    </Typography>
                    <Button color="inherit" onClick = {() => handleClick('showMap')}>Карта</Button>
                    <Button color="inherit" onClick = {() => handleClick('showProfile')}>Профиль</Button>
                    <Button color="inherit" onClick = {() => handleClick('isLoggedIn')}>Войти</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;