import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { isLoggedIn, login } from '../context/index';



export default class SignUp extends Component {

  state = {
    email: '',
    password: ''
  }

  // login = (evt) => {
  //   evt.preventDefault();
  //   console.log(this.state);
  // }

  handleEmail = (evt) => {
    this.setState({ email: evt.target.value })
  }

  handlePassword = (evt) => {
    this.setState({ password: evt.target.value })
  }

  render() {
    return (
      // <isLoggedIn.Consumer>

        <React.Fragment>
          <form onSubmit={login}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  required
                  id="username"
                  name="username"
                  label="Имя пользователя"
                  fullWidth
                  autoComplete="username"
                  onChange={this.handleEmail}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="password"
                  name="paswword"
                  label="Пароль"
                  fullWidth
                  onChange={this.handlePassword}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Button type="submit">
                  Войти
            </Button>
              </Grid>
            </Grid>
          </form>
        </React.Fragment>
      // </isLoggedIn.Consumer>

    );
  }

}