import React, { useState, useEffect, useContext, useReducer } from 'react'
import NavBar from '../components/NavBar'
import Counter from '../components/Counter'
import AppNavBar from '../components/NavBar'
import Firebase from '../components/Firebase.js'
import { Container, Typography, Box, Paper } from '@material-ui/core'


export default function Home(props) {
    console.log(Firebase.auth())
    return (
<Paper elevation={4}> 
        <Box display='flex' justifyContent='center' flexDirection='column' alignItems='center' p={4}>


            <Typography variant='h6'> A simple app based on create-react-app to reduce the setup and configuration time. </Typography>

            <Typography variant='h6'> 1)  Reactjs <br />  2) Material UI (includes a customizable theme file) <br /> 3) Centralized store using contextAPI <br /> 4) React Router <br /> 5) Firebase Authentication <br /> All juiced up in this template.</Typography>
        </Box>

        </Paper>
    )
}