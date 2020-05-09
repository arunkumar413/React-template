import React, { useState, useEffect } from 'react'
import { Box, TextField, InputAdornment, Grid, Container } from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle';
import { flexbox } from '@material-ui/system';





export default function Login2(props) {




const handleEmailChange=(e)=>{
    console.log(e.currentTarget.value)
}

    return (

<Container> 
        <Box display='flex' flexDirection='column' justifyContent='space-evenly' p={4} m={4}>
            <TextField onChange={handleEmailChange} value={"email"} fullWidth={true} id="standard-basic1" label="E-mail" InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <AccountCircle color='secondary' />
                    </InputAdornment>
                ),
            }} />

<TextField onChange={handleEmailChange} value={"email"} fullWidth={true} id="standard-basic1" label="E-mail" InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <AccountCircle color='secondary' />
                    </InputAdornment>
                ),
            }} />

<TextField onChange={handleEmailChange} value={"email"} fullWidth={true} id="standard-basic1" label="E-mail" InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <AccountCircle color='secondary' />
                    </InputAdornment>
                ),
            }} />


        </Box>
        </Container>
    )

}