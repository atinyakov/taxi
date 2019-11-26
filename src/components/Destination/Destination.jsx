import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import "./style.css";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { Autocomplete } from "@material-ui/lab";
import { GET_ROUTE } from "../../action";

function Destination({ GET_ROUTE, data }) {
  const addresses = data || ["Init"];
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  return (
    <div className={`destination`}>
      <React.Fragment>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Autocomplete
              options={addresses}
              getOptionDisabled={addresses => addresses === address2}
              id='select-from'
              value={address1}
              onChange={(event, newValue) => {
                setAddress1(newValue);
              }}
              renderInput={params => (
                <TextField {...params} label='Откуда' fullWidth />
              )}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Autocomplete
              options={addresses}
              getOptionDisabled={addresses => addresses === address1}
              id='select-to'
              value={address2}
              onChange={(event, newValue) => {
                setAddress2(newValue);
              }}
              renderInput={params => (
                <TextField {...params} label='Куда' fullWidth />
              )}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Button
              onClick={evt => {
                evt.preventDefault();
                console.log("call get_route ");
                GET_ROUTE(address1, address2);
              }}
            >
              Заказать
            </Button>
          </Grid>
        </Grid>
      </React.Fragment>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    data: state.loginHandler.addresses
  };
};

const mapDispatchToProps = dispatch => {
  return {
    GET_ROUTE: (address1, address2) => {
      dispatch(GET_ROUTE(address1, address2));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Destination);
