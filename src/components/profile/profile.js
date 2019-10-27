import React, {useState} from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';


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

const Profile = () => {
    const classes = useStyles();
    
    // const [card, setCard] = useState({
    //     creditCard: {
    //         cardHolder: '',
    //         number: '',
    //         csv: '',
    //         expiration: ''
    //     }
    // })
    const [holder, setHolder]  = useState('');
    const [number, setNumber]  = useState('');
    const [expiration, setExpiration]  = useState('');
    const [csv, setCSV]  = useState('');





    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('here');
        // setCard({

        // })
    }

    const handleInputChange = (e) => {
        e.preventDefault();
        // evt.target.name
    }


    return (
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={true}
          // onClose={handleClose}
        >
            <div className={classes.paper}>
                <form onSubmit = { (e) => this.handleSubmit(e) } >
                <Typography variant="h5" gutterBottom>
                    Profile
                </Typography> 
                    <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                    <TextField  onChange={this.handleInputChange}
                                required
                                name="holder"
                                id="cardName"
                                label="Name on card"
                                fullWidth />
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <TextField onChange={this.handleInputChange}
                                name="number"
                                required
                                id="cardNumber"
                                label="Card number"
                                fullWidth />
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <TextField  onChange={handleInputChange}
                                name="csv"
                                required
                                id="expDate" 
                                label="Expiry date" 
                                fullWidth />
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <TextField
                        onChange={handleInputChange}
                        required
                        id="cvv"
                        label="CVV"
                        helperText="Last three digits on signature strip"
                        fullWidth
                    />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Button

                            type="submit"
                            // onClick={handleNext}
                            className={classes.button}
                        >
                            Save
                        </Button>
                    </Grid>
                </Grid>
                </form>
            </div>
        </Modal>
    )
}

export default Profile;