import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';


export default function SignUp() {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="username"
            name="username"
            label="Имя пользователя"
            fullWidth
            autoComplete="username"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="password"
            name="paswword"
            label="Пароль"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Button>
            Войти
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}