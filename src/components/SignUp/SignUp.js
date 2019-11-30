import React from "react";
import Grid from "@material-ui/core/Grid";
// import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../action";
import { Form, Field } from "react-final-form";
import { TextField } from "final-form-material-ui";

function SignUp({ login }) {
  const onSubmit = async values => {
    login(values.email, values.password);
    return <Redirect to='/map' />;
  };

  const validate = values => {
    const errors = {};
    if (!values.password) {
      errors.password = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    }
    return errors;
  };
  return (
    <React.Fragment>
      <Form
        onSubmit={onSubmit}
        // initialValues={{ employed: true, stooge: "larry" }}
        validate={validate}
        render={({ handleSubmit, reset, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Field
                  // error
                  component={TextField}
                  required
                  type='email'
                  id='email'
                  name='email'
                  label='E-mail'
                  fullWidth
                  autoComplete='email'
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  component={TextField}
                  required
                  type='password'
                  id='password'
                  name='password'
                  label='Пароль'
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Button
                  variant='contained'
                  color='primary'
                  type='submit'
                  disabled={submitting || pristine}
                >
                  Войти
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      />
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (username, password) => {
      dispatch(login(username, password));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
