import React, {useState, useEffect, useContext, useReducer} from 'react'
import NavBar from '../components/NavBar'
import Counter from '../components/Counter'
import AppNavBar from '../components/NavBar'
import Firebase from '../components/Firebase.js'
import { Container, Typography } from '@material-ui/core'


export default function Home(props){
    console.log(Firebase.auth())
    return(
        
<Typography variant= 'h4'> Home page</Typography>


    )
}