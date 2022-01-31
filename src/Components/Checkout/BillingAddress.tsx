import Payment from './Payment';
import {
  TextField,
  Grid,
  MenuItem,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import { Wrapper, FormControlWrapper } from './BillingAddress.styles';
import { Seperator } from './Checkout.styles';
const BillingAddress = () => {
  return (
    <Wrapper>
      <h3>Billing Address</h3>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            id='outlined-basic'
            label='First name'
            variant='outlined'
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id='outlined-basic'
            label='Last name'
            variant='outlined'
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id='outlined-basic'
            label='Address'
            variant='outlined'
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id='outlined-basic'
            label='Address2 (Optional)'
            variant='outlined'
            fullWidth
          />
        </Grid>

        <Grid item xs={4}>
          <TextField
            id='outlined-basic'
            label='Country'
            variant='outlined'
            fullWidth
            select
          >
            <MenuItem value='ireland'>Ireland</MenuItem>
            <MenuItem value='united-states'>United States</MenuItem>
          </TextField>
        </Grid>

        <Grid item xs={4}>
          <TextField
            id='outlined-basic'
            label='State'
            variant='outlined'
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id='outlined-basic'
            label='ZIP Code'
            variant='outlined'
            fullWidth
          />
        </Grid>
      </Grid>
      <Seperator />
      <FormControlWrapper>
        <FormControlLabel
          control={<Checkbox name='shipping' color='primary' />}
          label='Shipping address is the same as my billing address'
        />
        <FormControlLabel
          control={<Checkbox name='save' color='primary' />}
          label='Save this information for next time'
        />
      </FormControlWrapper>
      <Seperator />
      <Payment />
    </Wrapper>
  );
};

export default BillingAddress;
