import React from 'react';
import Button from '@mui/material/Button';
import styles from './sample.module.scss';

const Sample = () => <div className={styles.marsV}>
  <Button onClick={() => console.log("hello")}>Click me</Button>
</div>


export default Sample;