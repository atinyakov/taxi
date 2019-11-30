import React from "react";
// import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
// import TextField from "@material-ui/core/TextField";
import { Form, Field } from "react-final-form";
import { TextField } from "final-form-material-ui";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { SIGNIN } from "../../action";

function SignIn({ SIGNIN, handleNext }) {
  const onSubmit = async values => {
    // await sleep(300);
    // window.alert(JSON.stringify(values, 0, 2));
    // console.log(values.email);
    // login(values.email, values.password);
    // return <Redirect to='/map' />;
    SIGNIN(values.email, values.password, values.name, values.surname)
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
                  // onChange={emailChange}
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
                  // onChange={nameChange}
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
                  // onChange={surnameChange}
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
                  // onChange={passwordChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Button
                  variant='contained'
                  color='primary'
                  type='submit'
                  disabled={submitting || pristine}
                  // onClick={() => SIGNIN(email, password, name, surname)}
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