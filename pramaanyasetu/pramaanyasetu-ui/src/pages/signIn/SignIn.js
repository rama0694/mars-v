import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, RadioGroup, FormControlLabel, Radio, Box } from '@mui/material';
import GoogleButton from 'react-google-button';
import { useNavigate } from 'react-router-dom';
import singinImage from '../../images/login.svg';

const SignIn = props => {
  const navigate = useNavigate();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    localStorage.setItem('userType', 'individual');
  }, []);

  const setUserType = (_, val) => {
    localStorage.setItem('userType', val);
  };

  const login = () => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
      navigate('/user');
    }, 1000);
  };

  return (
    <Container maxWidth={false} disableGutters>
      <Grid container spacing={2}>
        <Grid item md={6} sm={12} xs={12} className="border-right">
          <div className="display-flex flex-column align-items-center justify-content-center h-100 p-2">
            <Box className="w-100" sx={{ height: { sm: 320, xs: 320, md: '100%', lg: '100%' } }}>
              <img src={singinImage} alt="" className="my-4" />
            </Box>
          </div>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <div className="display-flex flex-column align-items-center justify-content-center h-100">
            <Typography variant="h2" component="h2" className="text-center my-1">
              Parmaanya Setu
            </Typography>
            <Typography variant="body1" className="text-center mb-4">
              Building Cred. Bridging Trust
            </Typography>

            <GoogleButton type="light" label={load ? 'Singing In....' : 'Sign In With Google'} onClick={login} />
            <div className="mt-4">
              <RadioGroup row name="userType" onChange={setUserType} defaultChecked defaultValue="individual">
                <FormControlLabel value="individual" control={<Radio />} label="Individual User" />
                <FormControlLabel value="organisation" control={<Radio />} label="Organization" />
              </RadioGroup>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignIn;
