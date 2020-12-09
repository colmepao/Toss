import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/Home.css';
import CardZero from '../../components/CardZero';
import CardOne from '../../components/CardOne';
import CardTwo from '../../components/CardTwo';

import { Grid } from '@material-ui/core';
import { Update } from '@material-ui/icons';

function Home() {
  
  let time = ''
  const [ctime, setCtime] = useState(time);

  const UpdateTime = () => {
    var start = new Date();
    start.setHours(17, 0, 0); // 5pm
  
    function pad(num) {
      return ("0" + parseInt(num)).substr(-2);
    }

    var now = new Date();
    if (now > start) { // too late, go to tomorrow
      start.setDate(start.getDate() + 1);
    }
    var remain = ((start - now) / 1000);
    var hh = pad((remain / 60 / 60) % 60);
    var mm = pad((remain / 60) % 60);
    var ss = pad(remain % 60);
    //setCtime(hh+":"+mm+":"+ss);
    setCtime(hh+"hrs "+mm+"mins "+ss+"secs ");
  }

  setInterval(UpdateTime, 1000)
  
  return (
    <div className="homePage">
      <div className="landing">
        <h1 className="welcome">Welcome to T.O.S.S</h1>
        <p className="description">
          That One Study Shows...
          <br></br>
          Making the world more educated, one study at a time{' '}
        </p>
        <br></br>
        <h1>Time until 5pm EST</h1>
        <h2>{ ctime }</h2>
      </div>

      <Grid container>
        <Grid item xs={4}>
          <CardZero />
        </Grid>
        <Grid item xs={4}>
          <CardOne />
        </Grid>
        <Grid item xs={4}>
          <CardTwo />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
