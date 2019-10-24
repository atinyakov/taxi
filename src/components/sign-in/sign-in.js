import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';


export default function SignIn() {
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
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="password"
            label="Пароль"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Button>
            Зарегистрироваться
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}