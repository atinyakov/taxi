import React, { useContext, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import { login } from '../context/index';


import { userData, user, reducer } from '../context/user';


export default function SignUp({ handleLogin }) {

  // const { handleLogin } = useContext(login);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');



  return (
    <React.Fragment>
      <form onSubmit={(evt) => {
        evt.preventDefault();
        // handleLogin(username, password)
      }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="username"
              name="username"
              label="Имя пользователя"
              fullWidth
              autoComplete="username"
              onChange={(evt) => { setUsername(evt.target.value) }}

            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="password"
              name="password"
              label="Пароль"
              fullWidth
              onChange={(evt) => { setPassword(evt.target.value) }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Button type="submit"
              onClick={handleLogin}>
              Войти
            </Button>
          </Grid>
        </Grid>
      </form>
    </React.Fragment>

  );

}