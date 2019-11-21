import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import { userContext } from '../context';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../action';

function SignUp({ login }) {
  const [username, setUsername] = React.useState();
  const [password, setPassword] = React.useState();

  const handleEmail = (evt) => {
    setUsername(evt.target.value)
  }

  const handlePassword = (evt) => {
    setPassword(evt.target.value)
  }

  // const { login } = useContext(userContext);
  // const { login } = props;
  // console.log('loginData', loginData)

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
              onClick={evt => {
                evt.preventDefault();
                login(username, password);
                // login()
              }}
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

const mapStateToProps = (state) => {
  return {
    user: state.userDataHandler
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) => {
      dispatch(login(username, password));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp)