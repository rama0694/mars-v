import React from 'react';
import { Container, Grid, Typography, Button } from '@mui/material';
import GoogleButton from 'react-google-button';

import singinImage from '../../images/login.svg';

const SignIn = () => {
  return (
    <Container maxWidth={false} disableGutters>
      <Grid container spacing={2}>
        <Grid item md={6} className='border-right'>
          <div className="display-flex flex-column align-items-center justify-content-center h-100 p-4">
            <img src={singinImage} alt="" className='my-4' />
          </div>
        </Grid>
        <Grid item md={6} sm={12} >
          <div className="display-flex flex-column align-items-center justify-content-center h-100">
            <Typography variant="h2" component="h2" className="text-center my-4">
              Parmaanya Setu
            </Typography>
            <GoogleButton
              type='light'
              onClick={() => { console.log('Google button clicked') }}
            />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignIn;
