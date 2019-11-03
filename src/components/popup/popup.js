import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import SignUp from '../sign-up';
import SignIn from '../sign-in';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { isLoggedIn, login } from '../context/index';


const steps = ['SignIn', 'SignUp'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <SignIn />;
    case 1:
      return (<login.Provider handlerLogin={login}><SignUp /></login.Provider>);
    default:
      throw new Error('Unknown step');
  }
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    top: '10%',
    left: 'calc(50% - 200px)',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Popup() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  // const   = this.props;

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const showPopup = useContext(isLoggedIn)

  return (
    // <isLoggedIn.Consumer>
    //   {value =>
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={!showPopup}
    // onClose={handleClose}
    >
      <div className={classes.paper}>
        <React.Fragment>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
                </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order confirmation, and will
                send you an update when your order has shipped.
                </Typography>
            </React.Fragment>
          ) : (
              <React.Fragment>
                <div className={classes.buttons}>

                  {activeStep !== 0 && (
                    <React.Fragment>
                      <h2 id="simple-modal-title">Войти</h2>
                      <p id="simple-modal-description">
                        Новый пользователь?
                    </p>
                      <Button onClick={handleBack} className={classes.button}>
                        Зарегистрироваться
                    </Button>
                    </React.Fragment>

                  )}
                  {activeStep !== 1 && (

                    <React.Fragment>
                      <h2 id="simple-modal-title">Регистрация</h2>
                      <p id="simple-modal-description">
                        Уже зарегестрированы?
                        </p>
                      <Button
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
    //   }
    // </isLoggedIn.Consumer>
  );
}


Popup.propTypes = {
  showPopup: PropTypes.bool
};

Popup.defaultProps = {
  showPopup: false
};
