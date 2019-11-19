import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import { userContext } from '../context';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginData, login} from '../../action';

function SignUp(props) {
  const [username, setUsername] = React.useState();
  const [password, setPassword] = React.useState();

  const handleEmail = (evt) => {
    setUsername(evt.target.value)
  }

  const handlePassword = (evt) => {
    setPassword(evt.target.value)
  }

  // const { login } = useContext(userContext);
  const { loginData, login } = props;
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
              onClick={() => {
                loginData(username, password);
                login()
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
    loginData: (username, password) => {
      dispatch(loginData(username, password))
    },
    login: () => {
      dispatch(login());
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp)