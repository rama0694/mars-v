import { Container, Tooltip, Typography } from '@material-ui/core';
import React from 'react';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, { timelineOppositeContentClasses } from '@mui/lab/TimelineOppositeContent';

const WorkExperience = () => {
  return (
    <Container disableGutters>
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.1,
          },
        }}>
        <TimelineItem>
          <TimelineOppositeContent color="textSecondary">2022</TimelineOppositeContent>
          <TimelineSeparator>
            <Tooltip title="Verified By Employer">
              <TimelineDot color="success" />
            </Tooltip>
            <TimelineConnector color="success" />
          </TimelineSeparator>
          <TimelineContent>
            <div className="display-flex flex-column">
              <Typography variant="h5">
                Software Developer
              </Typography>
              <Typography variant="h6">Perfios | Bangalore </Typography>
              <Typography variant="body1">
                Rama Subramanian R is a Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet excepturi
                deserunt quae beatae consectetur nisi vel debitis eaque quod laborum perferendis, ut voluptatum
                repellendus incidunt mollitia quidem, itaque dicta ratione!
              </Typography>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="textSecondary">2021</TimelineOppositeContent>
          <TimelineSeparator>
            <Tooltip title="Verified By Employer">
              <TimelineDot color="success" />
            </Tooltip>
          </TimelineSeparator>
          <TimelineContent>
            <div className="display-flex flex-column">
              <Typography variant="h5">
                Software Developer Intern
              </Typography>
              <Typography variant="h6">Perfios | Bangalore </Typography>
              <Typography variant="body1">
                Rama Subramanian R is a Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet excepturi
                deserunt quae beatae consectetur nisi vel debitis eaque quod laborum perferendis, ut voluptatum
                repellendus incidunt mollitia quidem, itaque dicta ratione!
              </Typography>
            </div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Container>
  );
};


export default WorkExperience;