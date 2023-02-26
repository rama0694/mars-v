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

  const goto = (val) => () => {
    console.log("val", val);

    const el = document.querySelector(`.${val}`);
    if(el) el.scrollIntoView({ behavior: "smooth"});
  }

  if (loding) return <Loader />;

  return (
    <Container maxWidth={false} disableGutters className="h-100">
      <Grid container spacing={2} className="h-100">
        <Grid item md={3} sm={12} className="border-right h-100 shadow">
          <Box component="div">
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
        </Grid>
        <Grid item md={7} sm={12} className="h-100">
          <Badge badgeContent={4} color="primary" sx={{ cursor: 'pointer', position: 'absolute', top: 16, right: 16 }}>
            <NotificationsOutlinedIcon fontSize="large" onClick={() => setOpenNotifications(true)} />
          </Badge>
          <Container maxWidth={false}>
            <section className="overview-section mb-4" style={{ marginTop: `100px` }}>
              <Typography variant="h4" className="section-title">
                Overview
              </Typography>
              <Typography variant="body1">
                Rama Subramanian R is a Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet excepturi
                deserunt quae beatae consectetur nisi vel debitis eaque quod laborum perferendis, ut voluptatum
                repellendus incidunt mollitia quidem, itaque dicta ratione!
              </Typography>
            </section>

            <section className="skills-section mb-4">
              <Typography variant="h4" className="section-title">
                Education
              </Typography>
              <Education
                onClick={() => {
                  setOpenCertificate(true);
                }}
              />
            </section>

            <section className="education-section mb-4">
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
        <Container sx={{ width: 900 }}>
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
    </Container>
  );
};

export default UserProfile;
