import React from "react";
import Button from "@material-ui/core/Button";
import { TextField, Container } from "@material-ui/core";
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

export default function TestPage() {
  return (
    <Container>
    <div style={{display:'grid', gridTemplateColumns:'auto auto', gridGap: 10, margin: 10,   alignItems: "center" }}>


      
      <AccessAlarmIcon fontSize={"large"} />
    

      <TextField label='Name' variant='outlined'/>
      <AccessAlarmIcon fontSize={"large"} />
    

    <TextField label='Name' variant='outlined'/>  <AccessAlarmIcon fontSize={"large"} />
    

    <TextField label='Name' variant='outlined'/>  <AccessAlarmIcon fontSize={"large"} />
    

    <TextField label='Name' variant='outlined'/>  <AccessAlarmIcon fontSize={"large"} />
    

    <TextField label='Name' variant='outlined'/>
    </div>
    </Container>
  );
}
