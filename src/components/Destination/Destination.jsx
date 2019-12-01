import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { TextField, Box, Typography } from "@material-ui/core/";
import "./style.css";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { Autocomplete } from "@material-ui/lab";
import { GET_ROUTE } from "../../action";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Paper } from "@material-ui/core/";

const useFormStyles = makeStyles(() => ({
  container: {
    padding: "24px"
  },
  order: {
    padding: "40px 0",
    width: "500px"
  },
  orderContainer: {
    padding: "0 50px"
  },
  button: {
    marginTop: "30px"
  },
  form: {
    padding: "60px 0",
    width: "500px"
  },
  formContainer: {
    padding: "0 60px 0 50px"
  }
}));

function Destination({ GET_ROUTE, data, card }) {
  const classes = useFormStyles();
  const addresses = data || ["Init"];
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [ordered, setOrdered] = useState(false);

  return (
    <div className={`destination`}>
      {!ordered && card && (
        <Paper className={classes.form}>
          <Container className={classes.formContainer}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Autocomplete
                  options={addresses}
                  getOptionDisabled={addresses => addresses === address2}
                  id='select-from'
                  value={address1}
                  onChange={(event, newValue) => {
                    setAddress1(newValue);
                  }}
                  renderInput={params => (
                    <TextField {...params} label='Откуда' fullWidth />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Autocomplete
                  options={addresses}
                  getOptionDisabled={addresses => addresses === address1}
                  id='select-to'
                  value={address2}
                  onChange={(event, newValue) => {
                    setAddress2(newValue);
                  }}
                  renderInput={params => (
                    <TextField {...params} label='Куда' fullWidth />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Button
                  className={classes.button}
                  variant='contained'
                  color='primary'
                  size='large'
                  onClick={evt => {
                    evt.preventDefault();
                    GET_ROUTE(address1, address2);
                    setOrdered(true);
                  }}
                >
                  Заказать
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Paper>
      )}

      {!ordered && !card && (
        <Container className={classes.container}>
          <Paper className={classes.order}>
            <Container className={classes.orderContainer}>
              <Grid container spacing={3}>
                {/* <Grid item xs={12} md={6}> */}
                <Link to='/profile' variant='contained' color='primary'>
                  Заполните банковскую карту
                </Link>
              </Grid>
            </Container>
          </Paper>
        </Container>
      )}

      {ordered && (
        <Container className={classes.container}>
          <Paper className={classes.order}>
            <Container className={classes.orderContainer}>
              <Box className={classes.message}>
                <Typography variant='body1'>
                  Ваш заказ принят. Такси скоро приедет.
                </Typography>
                <Button
                  className={classes.button}
                  variant='contained'
                  color='primary'
                  size='large'
                  onClick={evt => {
                    evt.preventDefault();
                    setOrdered(false);
                  }}
                >
                  Сделать новый заказ
                </Button>
              </Box>
            </Container>
          </Paper>
        </Container>
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    data: state.addresses,
    card: state.card.cardNumber
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
