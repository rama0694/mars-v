import { Chip, Container, Divider, Snackbar, Typography } from '@material-ui/core';
import React, { useState} from 'react';
import Button from '@mui/material/Button';


const Notification = ({ company }) => {
  const notification = {
    title: 'Profile access',
    description: `Organization ${company} would like to access your profile`,
    time: '10 mins ago'
  }

  const [open, setOpen] = useState(false);

  const [msg, setMsg] = useState('');


  return <Container sx={{ width: 350 }} className='py-4'>

    <Snackbar
      open={open}
      autoHideDuration={6000}
      message={msg}
    />
    <Typography variant='subtitle2' component='h3'>
      <div className='display-flex align-items-center justify-content-between'>
        <span>{notification.title}</span>
        <p>{notification.time}</p>
      </div> 
    </Typography>
    <Typography variant='body1' className='pb-2'>
      {notification.description}
    </Typography>

    <div className='display-flex align-items-center justify-content-between pb-2'>
      <Button  color="success" size='small' onClick={()=>{
        setMsg('Access Approved')
        setOpen(true)
      }}>
        Approve
      </Button>
      <Button  color="error" size='small' onClick={()=>{
        setMsg('Access Rejected')
        setOpen(true)
      }}>
        Reject
      </Button>
    </div>
    <Divider />
  </Container>
}

export default Notification;