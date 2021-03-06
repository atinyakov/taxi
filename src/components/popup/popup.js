import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import SignUp from "../SignUp";
import SignIn from "../SignIn";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import Background from "../../img/bg/auth-bg.jpg";

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 400,
    top: "10%",
    left: "calc(50% - 200px)",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  authBg: {
    backgroundColor: "#000",
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover"
  }
}));

function Popup({ isLoggedIn }) {
  const steps = ["SignIn", "SignUp"];

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <SignIn handleNext={handleNext} />;
      case 1:
        return <SignUp />;
      default:
        throw new Error("Unknown step");
    }
  }
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Modal
      aria-labelledby='simple-modal-title'
      aria-describedby='simple-modal-description'
      open={!isLoggedIn}
      className={classes.authBg}
    >
      <div className={classes.paper}>
        <React.Fragment>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant='h5' gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant='subtitle1'>
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div className={classes.buttons}>
                {activeStep !== 0 && (
                  <React.Fragment>
                    <h2 id='simple-modal-title'>Войти</h2>
                    <p id='simple-modal-description'>Новый пользователь?</p>
                    <Button
                      variant='contained'
                      color='primary'
                      onClick={handleBack}
                      className={classes.button}
                    >
                      Зарегистрироваться
                    </Button>
                  </React.Fragment>
                )}
                {activeStep !== 1 && (
                  <React.Fragment>
                    <h2 id='simple-modal-title'>Регистрация</h2>
                    <p id='simple-modal-description'>Уже зарегестрированы?</p>
                    <Button
                      variant='contained'
                      color='primary'
                      onClick={handleNext}
                      className={classes.button}
                    >
                      Войти
                    </Button>
                  </React.Fragment>
                )}
              </div>
              {getStepContent(activeStep)}
            </React.Fragment>
          )}
        </React.Fragment>
      </div>
    </Modal>
  );
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn
  };
};

export default connect(mapStateToProps)(Popup);
