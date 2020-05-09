import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box';
import { flexbox } from '@material-ui/system';
import AppNavBar from '../components/NavBar';
import { Button, Grid, Paper, Container, InputAdornment } from '@material-ui/core';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Firebase from '../components/Firebase'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function Register(props) {
    const classes = useStyles();
    const [email, setEmail] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')
    const [firebaseError, setFirebaseError]= useState("")

    const [userInfo, setUserInfo] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState('')


    useEffect(() => {

if(password1!=password2){
    setFirebaseError('Passwords dont match.')
}

else if (password1==password2){
    setFirebaseError("Passwords match.")
}

    },[password1, password2])


    const handlePassword2=(e)=>{
        setPassword2(e.target.value)
        // if(password1!=e.target.value){
        //     setFirebaseError("Passwords don't match")
        // }

        // else if(password1==e.target.value) {

        //     setFirebaseError('Passwords match')
        // }

    }


    const handlePassword1=(e)=>{
        setPassword1(e.target.value)

    }


    const handleEmail=(e)=>{
        setEmail(e.target.value)

    }

    const handleRegister=()=>{

        Firebase.auth().createUserWithEmailAndPassword(email, password1).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            setFirebaseError(errorMessage)
          });

    }


    

    return (


        <Grid item
            container
            direction="column"
            justify="space-evenly"
            alignItems="stretch"
            spacing={1}
            item >
            <Grid item >
                <Typography style={{ textAlign: 'center' }} variant='h6'>  Register </Typography>
            </Grid>


            <Grid item  >
                <TextField onChange={handleEmail} value={email} fullWidth={true} id="standard-basic1" label="E-mail" InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <AccountCircle color='secondary' />
                        </InputAdornment>
                    ),
                }} />
            </Grid>

            <Grid item >
                <TextField onChange={handlePassword1} value={password1} fullWidth={true} id="standard-basic2" label="Password" type='password' InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <LockOutlinedIcon color='secondary' />
                        </InputAdornment>
                    )
                }} />
            </Grid>
            <Grid item >
                <TextField onChange={handlePassword2} value={password2} fullWidth={true} id="standard-basic2" label="Confirm Password" type='password' InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <LockOutlinedIcon color='secondary' />
                        </InputAdornment>
                    )
                }} />
            </Grid>

            <Grid item>
<Button onClick={handleRegister} fullWidth={true} color='primary' variant='contained'>  Register </Button>

            </Grid>
            <Grid item>
<Typography color='secondary' variant='body1'> {firebaseError} </Typography>

            </Grid>
        </Grid>

    )

}