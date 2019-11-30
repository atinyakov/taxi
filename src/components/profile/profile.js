import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
// import Grid from './node_modules/@material-ui/core/Grid';
import Grid from "@material-ui/core/Grid";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { POST_CARD } from "../../action";
import { Form, Field } from "react-final-form";
import { TextField } from "final-form-material-ui";

import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate
} from './cardUtils'

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
  const onSubmit = async values => {
    POST_CARD(
      values.cardName,
      values.cardNumber,
      values.expiryDate,
      values.cvc
    );
    return <Redirect to='/map' />;
  };

  const validate = values => {
    const errors = {};
    if (!values.cardNumber) {
      errors.cardNumber = "Required";
    }
    if (!values.cardName) {
      errors.cardName = "Required";
    }
    if (!values.expiryDate) {
      errors.expiryDate = "Required";
    }
    if (!values.cvc) {
      errors.cvc = "Обязательное поле";
    }
    return errors;
  };

  return (
    <Modal
      aria-labelledby='simple-modal-title'
      aria-describedby='simple-modal-description'
      open={true}
      // onClose={handleClose}
    >
      <Form
        onSubmit={onSubmit}
        // initialValues={{ employed: true, stooge: "larry" }}
        validate={validate}
        render={({ handleSubmit, reset, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div className={classes.paper}>
              <Typography variant='h5' gutterBottom>
                Profile
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Field
                    component={TextField}
                    required
                    id='cardName'
                    label='Name on card'
                    fullWidth
                    name='cardName'
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Field
                    component={TextField}
                    required
                    id='cardNumber'
                    label='Card number'
                    fullWidth
                    name="cardNumber"
                    format={formatCreditCardNumber}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Field
                    required
                    component={TextField}
                    id='expDate'
                    label='Expiry date'
                    fullWidth
                    name="expiryDate"
                    format={formatExpirationDate}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Field
                    required
                    component={TextField}
                    id='cvc'
                    label='CVC'
                    helperText='Last three digits on signature strip'
                    fullWidth
                    name='cvc'
                    format={formatCVC}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Button
                    variant='contained'
                    color='primary'
                    type='submit'
                    disabled={submitting || pristine}
                  >
                    Добавить карту
                  </Button>
                  <Link to='/map'> Закрыть </Link>
                </Grid>
              </Grid>
            </div>
          </form>
        )}
      />
    </Modal>
  );
}

const mapStateToProps = state => {
  return {
    token: state.token
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
