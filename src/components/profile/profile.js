import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
// import Grid from './node_modules/@material-ui/core/Grid';
import Grid from '@material-ui/core/Grid';


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

    return (
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={true}
          // onClose={handleClose}
        >
            <div className={classes.paper}>

                <Typography variant="h5" gutterBottom>
                    Profile
                </Typography> 
                    <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                    <TextField required id="cardName" label="Name on card" fullWidth />
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <TextField required id="cardNumber" label="Card number" fullWidth />
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <TextField required id="expDate" label="Expiry date" fullWidth />
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cvv"
                        label="CVV"
                        helperText="Last three digits on signature strip"
                        fullWidth
                    />
                    </Grid>
                </Grid>
            </div>
        </Modal>
    )
}

export default Profile;