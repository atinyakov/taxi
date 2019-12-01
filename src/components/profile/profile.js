import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Container, Box, Paper } from "@material-ui/core/";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { POST_CARD } from "../../action";
import { Form, Field } from "react-final-form";
import { TextField } from "final-form-material-ui";
import { MCIcon } from "loft-taxi-mui-theme";

import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate
} from "./cardUtils";

// const useStyles = makeStyles(theme => ({
//   paper: {
//     position: "absolute",
//     width: 400,
//     top: "10%",
//     left: "calc(50% - 200px)",
//     backgroundColor: theme.palette.background.paper,
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3)
//   }
// }));

export const useStyles = makeStyles(() => ({
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "46px"
  },
  cardsContainer: {
    marginTop: "40px",
    display: "flex",
    justifyContent: "space-between"
  },
  card: {
    boxSizing: "border-box",
    marginRight: "10px",
    height: "230px",
    width: "384px",
    padding: "40px 30px 30px",
    position: "relative"
  },
  profile: {
    padding: "56px 0 72px",
    width: "945px",
    position: "relative"
  },
  profileContainer: {
    padding: "0 73px"
  }
}));

function Profile({ token, POST_CARD }) {
  const classes = useStyles();
  const onSubmit = async values => {
    POST_CARD(
      values.cardName,
      values.cardNumber,
      values.expiryDate,
      values.cvc,
      token
    );
    return <Redirect to='map' />;
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
    <Paper className={classes.profile}>
      <Container className={classes.profileContainer}>
        <Form
          onSubmit={onSubmit}
          validate={validate}
          render={({ handleSubmit, reset, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              {/* <div className={classes.paper}> */}
                <Box textAlign='center'>
                  <Typography variant='subtitle1'>Способ оплаты</Typography>
                </Box>
                <Box className={classes.cardsContainer}>
                  <Paper className={classes.card}>
                    <MCIcon />
                    <Field
                      component={TextField}
                      required
                      id='cardName'
                      label='Name on card'
                      fullWidth
                      name='cardName'
                    />
                    {/* </Grid>
                <Grid item xs={12} md={6}> */}
                    <Field
                      component={TextField}
                      required
                      id='cardNumber'
                      label='Card number'
                      fullWidth
                      name='cardNumber'
                      format={formatCreditCardNumber}
                    />
                    {/* </Grid> */}
                  </Paper>
                  <Paper className={classes.card}>
                    {/* <Grid item xs={12} md={6}> */}
                    <Field
                      required
                      component={TextField}
                      id='expDate'
                      label='Expiry date'
                      fullWidth
                      name='expiryDate'
                      format={formatExpirationDate}
                    />
                    {/* </Grid>
                <Grid item xs={12} md={6}> */}
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
                    {/* </Grid> */}
                  </Paper>
                </Box>
                <Box className={classes.buttonContainer}>
                  {/* <Grid item xs={12} md={6}> */}
                  <Button
                    variant='contained'
                    color='primary'
                    type='submit'
                    disabled={submitting || pristine}
                  >
                    Добавить карту
                  </Button>
                  {/* </Grid> */}
                </Box>
              {/* </div> */}
            </form>
          )}
        />
      </Container>
    </Paper>
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
