import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function PaymentForm(props) {
    var handleChange = e => {
        props.setCardName (e.currentTarget.value);
 }
 var handleChange1 = e => {
   props.setCardNumber (e.currentTarget.value);
}
var handleChange2 = e => {
props.setExpDate (e.currentTarget.value);
}
var handleChange3 = e => {
props.setCvv (e.currentTarget.value);
}
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Your Balance is : <h1>150000521$</h1>
      </Typography>

      <Typography variant="h6" gutterBottom>
        Will Be : <h1>150521 - 1321 = 2321$</h1>
      </Typography>

    </React.Fragment>
  );
}