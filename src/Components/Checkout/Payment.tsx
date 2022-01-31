import { useState } from 'react';
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Grid,
  TextField,
  Button,
} from '@material-ui/core';
import { Seperator } from './Checkout.styles';
const Payment = () => {
  const [payment, setPayment] = useState('credit-card');

  const handlePaymentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPayment((event.target as HTMLInputElement).value);
  };
  return (
    <>
      <h3>Payment</h3>

      <FormControl component='fieldset'>
        <RadioGroup
          name='payment'
          value={payment}
          onChange={handlePaymentChange}
          defaultValue={'credit-card'}
          style={{ flexDirection: 'row' }}
        >
          <FormControlLabel
            value='credit-card'
            control={<Radio color='primary' />}
            label='Credit card'
          />
          <FormControlLabel
            value='debit-card'
            control={<Radio color='primary' />}
            label='Debit card'
          />
          <FormControlLabel
            value='Paypal'
            control={<Radio color='primary' />}
            label='Paypal'
          />
        </RadioGroup>
      </FormControl>
      <Grid container spacing={3} style={{ marginTop: '10px' }}>
        <Grid item xs={6}>
          <TextField
            id='outlined-basic'
            label='Name on card'
            variant='outlined'
            fullWidth
            helperText='Full name as displayed on card'
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id='outlined-basic'
            label='Credit Card Number'
            variant='outlined'
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            id='outlined-basic'
            label='Expiration'
            variant='outlined'
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            id='outlined-basic'
            label='CCV'
            variant='outlined'
            fullWidth
          />
        </Grid>
      </Grid>
      <Seperator />
      <Button variant='contained' color='primary' fullWidth>
        Continue To Checkout
      </Button>
    </>
  );
};

export default Payment;
