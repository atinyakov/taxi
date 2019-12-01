import React from "react";
// import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { POST_CARD } from "../../action";
import { Form, Field } from "react-final-form";
import "../../styles.css";
import { MCIcon } from "loft-taxi-mui-theme";
import {
  Container,
  Box,
  Typography,
  Paper,
  TextField,
  Button
} from "@material-ui/core/";

import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate
} from "./cardUtils";

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
    height: "230px",
    width: "384px",
    padding: "40px 30px 30px",
    position: "relative"
  },
  container: {
    minHeight: "calc(100vh - 71px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
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
    <Container className={classes.container}>
      <Paper className={classes.profile}>
        <Container className={classes.profileContainer}>
          <Form
            onSubmit={onSubmit}
            validate={validate}
            render={({ handleSubmit, reset, submitting, pristine, values }) => (
              <form onSubmit={handleSubmit}>
                <Box textAlign='center'>
                  <Typography variant='subtitle1'>Способ оплаты</Typography>
                </Box>
                <Box className={classes.cardsContainer}>
                  <Paper className={classes.card}>
                    <MCIcon />
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
                          name='cardNumber'
                          format={formatCreditCardNumber}
                        />
                      </Grid>
                    </Grid>
                  </Paper>
                  <Paper className={classes.card}>
                    <Field
                      required
                      component={TextField}
                      id='expDate'
                      label='Expiry date'
                      fullWidth
                      name='expiryDate'
                      format={formatExpirationDate}
                    />
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
                  </Paper>
                </Box>
                <Box className={classes.buttonContainer}>
                  <Button
                    variant='contained'
                    color='primary'
                    type='submit'
                    size='large'
                    disabled={submitting || pristine}
                  >
                    Добавить карту
                  </Button>
                </Box>
              </form>
            )}
          />
        </Container>
      </Paper>
    </Container>
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
