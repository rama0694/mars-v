import React, { useEffect, useState } from 'react';
import { Apps, Menu, ContactMail, AssignmentInd, Home } from '@material-ui/icons';
import VerifiedIcon from '@mui/icons-material/Verified';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';

import Stack from '@mui/material/Stack';

import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import Backdrop from '@mui/material/Backdrop';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import cft from '../../images/cft.jpeg';

import {
  Container,
  Grid,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Avatar,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  CssBaseline,
  Drawer,
  Chip,
  Badge,
  Icon,
} from '@mui/material';
import Loader from '../../components/loader';
import Notification from '../../components/notitifcation';
import Education from '../../components/education';
import Certification from '../../components/certification';
import WorkExperience from '../../components/workExperience';
const listItems = [
  {
    listIcon: <Home />,
    listText: 'Overview',
    selector: 'overview-section',
  },
  {
    listIcon: <AssignmentInd />,
    listText: 'Education',
    selector: 'education-section',
  },
  {
    listIcon: <Apps />,
    listText: 'Skills',
    selector: 'skills-section',
  },
  {
    listIcon: <ContactMail />,
    listText: 'Certifications',
    selector: 'certifications-section',
  },
  {
    listIcon: <WorkHistoryOutlinedIcon />,
    listText: 'Work Experience',
    selector: 'workexperiece-section',
  },
];

const UserProfile = () => {
  const userType = localStorage.getItem('userType');

  const [loding, setLoading] = useState(true);

  const [openNotifications, setOpenNotifications] = useState(false);

  const [openCertificate, setOpenCertificate] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  const goto = val => () => {
    const el = document.querySelector(`.${val}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', alignToTop: true });
  };

  if (loding) return <Loader />;

  return (
    <Container maxWidth={false} disableGutters className="h-100">
      <Grid container spacing={2} className="h-100">
        <Grid
          item
          md={3}
          sm={12}
          xs={12}
          className="border-right h-100 shadow"
          sx={{
            height: { sm: '300px !important', xs: '300px !important', md: '100% !important', lg: '100% !important' },
          }}>
          <Box component="div" sx={{ display: { sm: 'none', xs: 'none', md: 'block', lg: 'block' } }}>
            <div className="display-flex flex-column justify-content-center align-items-center py-4">
              <Avatar src="https://i.ibb.co/rx5DFbs/avatar.png" className="w-25 h-25 shadow" alt="user" />
              <Typography
                variant="h5"
                className="my-2 display-flex justify-content-center align-items-center"
                component="div">
                <span className="mr-1">Rama Subramanian R</span>
                <VerifiedOutlinedIcon color="primary" className="" />
              </Typography>
              <Chip label={userType === 'individual' ? 'Individual User' : 'organization'} />
            </div>
            <div className="display-flex flex-column justify-content-center">
              <List>
                <ListItem>
                  <ListItemIcon>
                    <AlternateEmailOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText>rama0694@gmail.com</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CallOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText>9845012345</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PermIdentityOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText>9060xxxxxxxx</ListItemText>
                </ListItem>
              </List>
            </div>
            <Divider />
            <List>
              {listItems.map((listItem, index) => (
                <ListItem key={index} onClick={goto(listItem?.selector)}>
                  <ListItemIcon>{listItem.listIcon}</ListItemIcon>
                  <ListItemText primary={listItem.listText} />
                </ListItem>
              ))}
            </List>
          </Box>
          <Box component="div" className="py-4" sx={{ display: { sm: 'block', xs: 'block', md: 'block', lg: 'none' } }}>
            <div className="display-flex flex-column justify-content-center align-items-center">
              <div className="display-flex">
                <Avatar src="https://i.ibb.co/rx5DFbs/avatar.png" className="w-25 h-25 px-4 py-4" alt="user" />
                <Typography
                  variant="h5"
                  className="my-2 display-flex flex-column justify-content-center align-items-start"
                  component="div">
                  <span>
                    <span className="mr-1">Rama Subramanian R</span>
                    <VerifiedOutlinedIcon color="primary" className="" />
                  </span>
                  <Chip size="small" label={userType === 'individual' ? 'Individual User' : 'organization'} />
                </Typography>
                {/*  */}
              </div>
            </div>
            <div className="display-flex flex-column justify-content-center">
              <List>
                <ListItem>
                  <ListItemIcon>
                    <AlternateEmailOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText>rama0694@gmail.com</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CallOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText>9845012345</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PermIdentityOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText>9060xxxxxxxx</ListItemText>
                </ListItem>
              </List>
            </div>
          </Box>
        </Grid>
        <Grid item md={9} sm={12} className="h-100 overflow-y-auto overflow-x-hidden">
          <Badge badgeContent={4} color="primary" sx={{ cursor: 'pointer', position: 'absolute', top: 16, right: 16 }}>
            <NotificationsOutlinedIcon fontSize="large" onClick={() => setOpenNotifications(true)} />
          </Badge>
          <Container maxWidth={false} sx={{ paddingBottom: { sm: 20, xs: 20, md: 0, lg: 0 } }}>
            <Box
              component={'section'}
              className="overview-section mb-4"
              sx={{ marginTop: { xs: '0px !important', md: '100px !important' } }}
              style={{ marginTop: `100px` }}>
              <Typography variant="h4" className="section-title">
                Overview
              </Typography>
              <Typography variant="body1">
                Rama Subramanian R is a Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet excepturi
                deserunt quae beatae consectetur nisi vel debitis eaque quod laborum perferendis, ut voluptatum
                repellendus incidunt mollitia quidem, itaque dicta ratione!
              </Typography>
            </Box>

            <section className="education-section mb-4">
              <Typography variant="h4" className="section-title">
                Education
              </Typography>
              <Education
                onClick={() => {
                  setOpenCertificate(true);
                }}
              />
            </section>

            <section className="skills-section mb-4">
              <Typography variant="h4" className="section-title">
                Skills
              </Typography>
              <Typography variant="body1">
                <Stack direction="row" spacing={1} className="mt-2">
                  <Chip label="C++" variant="outlined" />
                  <Chip label="Sleeping" variant="outlined" />
                  <Chip label="Eating" variant="outlined" />
                  <Chip label="Hudgeerge line hodyod" variant="outlined" />
                </Stack>
              </Typography>
            </section>

            <section className="certifications-section mb-4">
              <Typography variant="h4" className="section-title">
                Certifications
              </Typography>
              <Certification
                onClick={() => {
                  setOpenCertificate(true);
                }}
              />
            </section>

            <section className="workexperiece-section mb-4">
              <Typography variant="h4" className="section-title">
                Work Experience
              </Typography>
              <WorkExperience />
            </section>
          </Container>
        </Grid>
      </Grid>
      <Drawer anchor="right" open={openCertificate} onClose={() => setOpenCertificate(false)}>
        <Container sx={{ width: { sm: 350, xs: 350, md: 900, lg: 900 } }}>
          <div className="border py-4">
            <Typography
              variant="h5"
              className="py-2 display-flex justify-content-center align-items-center border-botton"
              component="div">
              Coursera Certificate <Chip color="success" className="ml-2" label="verified" size="small" />
            </Typography>
            <img src={cft} alt="" className="w-100" />
          </div>
        </Container>
      </Drawer>
      <Drawer anchor="right" open={openNotifications} onClose={() => setOpenNotifications(false)}>
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
      </Drawer>
      <BottomNavigation className="shadow-lg position-fixed" style={{ bottom: 0 }}
      onChange={(e, val) => {
        if(listItems[val]) {
          goto(listItems[val]?.selector)();
        }
      }}
      sx={{ display: { sm: 'flex', xs: 'flex', md: 'none', lg: 'none' } }}
      
      >
        {listItems.map((listItem, index) => (
          <BottomNavigationAction style={{ backgroundColor: 'white' }} icon={listItem.listIcon} />
        ))}
      </BottomNavigation>
    </Container>
  );
};

export default UserProfile;
