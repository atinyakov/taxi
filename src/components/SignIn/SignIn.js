import React from "react";
import Grid from "@material-ui/core/Grid";
import { Form, Field } from "react-final-form";
import { TextField } from "final-form-material-ui";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { SIGNIN } from "../../action";

function SignIn({ SIGNIN, handleNext }) {
  const onSubmit = async values => {
    SIGNIN(values.email, values.password, values.firstName, values.lastName)
    handleNext()
  };

  const validate = values => {
    const errors = {};
    if (!values.password) {
      errors.password = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    }
    if (!values.password) {
      errors.firstName = "Required";
    }
    if (!values.email) {
      errors.lastName = "Обязательное поле";
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
                  required
                  id='email'
                  component={TextField}
                  type='email'
                  name='email'
                  label='Адрес электронной почты'
                  fullWidth
                  autoComplete='email'
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  required
                  component={TextField}
                  id='firstName'
                  name='firstName'
                  label='Имя'
                  fullWidth
                  autoComplete='fname'
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  required
                  component={TextField}
                  id='lastName'
                  name='lastName'
                  label='Фамилия'
                  fullWidth
                  autoComplete='lname'
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  required
                  component={TextField}
                  id='address1'
                  name='password'
                  label='Пароль'
                  fullWidth
                  type='password'
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Button
                  variant='contained'
                  color='primary'
                  type='submit'
                  disabled={submitting || pristine}
                >
                  Зарегистрироваться
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      />
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    SIGNIN: (email, name, surname, password) => {
      dispatch(SIGNIN(email, name, surname, password));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);