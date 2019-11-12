import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { userContext } from '../context';
import { Link } from 'react-router-dom';



export default function SignUp() {
  const [username, setUsername] = React.useState();
  const [password, setPassword] = React.useState();

  const handleEmail = (evt) => {
    setUsername(evt.target.value)
  }

  const handlePassword = (evt) => {
    setPassword(evt.target.value)
  }

  const { handleLogin } = useContext(userContext);

  return (

    <React.Fragment>
      {/* <form onSubmit={(evt) => {
        evt.preventDefault();
        handleLogin(username, password);
      }}> */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="username"
            name="username"
            label="Имя пользователя"
            fullWidth
            autoComplete="username"
            onChange={handleEmail}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="password"
            name="pasword"
            label="Пароль"
            fullWidth
            onChange={handlePassword}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Link to="map">
            <Button
              onClick={() => handleLogin(username, password)}
            >
              Войти
            </Button>
          </Link>
        </Grid>
      </Grid>
      {/* </form> */}
    </React.Fragment>
  );

}