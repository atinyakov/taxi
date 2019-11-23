import React, { useState } from "react";
// import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
// import Grid from './node_modules/@material-ui/core/Grid';
import Grid from "@material-ui/core/Grid";

import { connect } from "react-redux";
import { POST_CARD } from "../../action";

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 400,
    top: "10%",
    left: "calc(50% - 200px)",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

function Profile({ token, POST_CARD }) {
  const classes = useStyles();
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");

  return (
    <Modal
      aria-labelledby='simple-modal-title'
      aria-describedby='simple-modal-description'
      open={true}
      // onClose={handleClose}
    >
      <div className={classes.paper}>
        <Typography variant='h5' gutterBottom>
          Profile
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id='cardName'
              label='Name on card'
              fullWidth
              onChange={evt => {
                setCardName(evt.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id='cardNumber'
              label='Card number'
              fullWidth
              onChange={evt => {
                setCardNumber(evt.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id='expDate'
              label='Expiry date'
              fullWidth
              onChange={evt => {
                setExpiryDate(evt.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id='cvc'
              label='CVC'
              helperText='Last three digits on signature strip'
              fullWidth
              onChange={evt => {
                setCvc(evt.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Button
              onClick={() =>
                POST_CARD(cardNumber, expiryDate, cardName, cvc, token)
              }
            >
              Добавить карту
            </Button>
          </Grid>
        </Grid>
      </div>
    </Modal>
  );
}

const mapStateToProps = state => {
  return {
    token: state.loginHandler.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    POST_CARD: (cardNumber, expiryDate, cardName, cvc, token) => {
      dispatch(POST_CARD(cardNumber, expiryDate, cardName, cvc, token));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
