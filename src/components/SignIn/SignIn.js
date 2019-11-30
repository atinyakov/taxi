import React, { useState } from 'react';
// import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { SIGNIN } from '../../action';



function SignIn({SIGNIN}) {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');


  const nameChange = (evt) => {
    setName(evt.target.value)
  }
  const surnameChange = (evt) => {
    setSurname(evt.target.value)
  }
  const passwordChange = (evt) => {
    setPassword(evt.target.value)
  }
  const emailChange = (evt) => {
    setEmail(evt.target.value)
  }


  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            label="Адрес электронной почты"
            fullWidth
            autoComplete="email"
            onChange={emailChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Имя"
            fullWidth
            autoComplete="fname"
            onChange={nameChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Фамилия"
            fullWidth
            autoComplete="lname"
            onChange={surnameChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="password"
            label="Пароль"
            fullWidth
            onChange={passwordChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Button onClick = {() => SIGNIN(email, password, name, surname)}>
            Зарегистрироваться
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    SIGNIN: (email, name, surname, password) => {
      dispatch(SIGNIN(email, name, surname, password))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn)