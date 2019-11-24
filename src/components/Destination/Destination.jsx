import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Modal from '@material-ui/core/Modal';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import "./style.css";

import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import { connect } from "react-redux";
import { GET_ROUTE } from "../../action";

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 400,
    top: "10%",
    left: "calc(50% - 200px)",
    // backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

function Destination({ GET_ROUTE, data }) {
  const classes = useStyles();
  const addresses = data || ["", "", ""];
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  return (
    // <Modal
    //   aria-labelledby="simple-modal-title"
    //   aria-describedby="simple-modal-description"
    //   open={showDest}
    // >
    <div className={`destination`}>
      <React.Fragment>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              id='select-from'
              select
              fullWidth
              label='Откудa'
              // className={classes.textField}
              // value={address}
              onChange={evt => setAddress1(evt.target.value)}
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
              // helperText='Please select your currency'
              // margin='normal'
            >
              {addresses.map(address => (
                <MenuItem key={address} value={address}>
                  {address}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id='select-to'
              select
              fullWidth
              label='Куда'
              // className={classes.textField}
              // value={address}
              // onChange={handleChange}
              onChange={evt => setAddress2(evt.target.value)}
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
              // helperText='Please select your currency'
              // margin='normal'
            >
              {addresses.map(address => (
                <MenuItem key={address} value={address}>
                  {address}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button
              onClick={evt => {
                evt.preventDefault();
                console.log('call get_route ')
                GET_ROUTE(address1, address2);
              }}
            >
              Заказать
            </Button>
          </Grid>
        </Grid>
      </React.Fragment>
    </div>
    //{" "}
  );
}

// export default Destination;

const mapStateToProps = state => {
  return {
    data: state.loginHandler.addresses
  };
};

const mapDispatchToProps = dispatch => {
  return {
    GET_ROUTE: (address1, address2) => {
      dispatch(GET_ROUTE(address1, address2));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Destination);
