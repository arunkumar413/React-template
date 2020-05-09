import React, { useState, useEffect, useContext } from 'react';
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
import firebase, { Auth, googleProvider, facebookProvider } from './Firebase.js';
import { storeContext } from './StoreContext';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));


console.log('000----99999')
console.log(googleProvider)


export default function Login() {
    const classes = useStyles();
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [userInfo, setUserInfo] = useState({})
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [firebaseError, setFirebaseError] = useState('')
    const [providers, setProviders]= useState({google:googleProvider, facebook: facebookProvider})

    const appStore = useContext(storeContext);



    const handleEmailChange = (event) => {
        console.log(event.target.value)
        setEmail(event.target.value)
    }


    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }


    const singInWithProvider = (e) => {
        console.log('09409404040')
        console.log(providers[e.currentTarget.value])
        const provider = providers[e.currentTarget.value]
        firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            // var user = result.user;
            setIsLoggedIn(true)
            setUserInfo(result.user)
            appStore.dispatch({type:'setuser', payload: result.user})
            appStore.dispatch({type:'setIsLoggedIn', payload:true})



            // ...
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            setFirebaseError(errorMessage)
            // ...
        });
    }
    const handleGithub = (val) => { console.log(val) }
    return (
        <Grid item container
            direction="column"
            justify="space-evenly"
            alignItems="stretch"
            spacing={1}

        >
            <Grid item >
                <Typography style={{ textAlign: 'center' }} variant='h6'>  Please login </Typography>
            </Grid>

            <Grid item >
                <TextField type='email' onChange={handleEmailChange} value={email} fullWidth={true} id="standard-basic1" label="E-mail" InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <AccountCircle color='secondary' />
                        </InputAdornment>
                    ),
                }} />
            </Grid>

            <Grid item >
                <TextField onChange={handlePasswordChange} value={password} fullWidth={true} id="standard-basic2" label="Password" type='password' InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <LockOutlinedIcon color='secondary' />
                        </InputAdornment>
                    ),
                }} />
            </Grid>

            <Grid item  >
                <Button fullWidth={true} variant='contained' color='primary' > Login </Button>
            </Grid>

            <Grid item   >
                <Typography style={{ textAlign: 'center' }} variant='h6'>  Or login with: </Typography>
            </Grid>

            <Grid item >
                <Button value={"google"} onClick={(value) => { console.log(value); singInWithProvider(value) }} fullWidth={true} variant='outlined' color='primary'> Google </Button>
            </Grid>
            <Grid item  >
                <Button value={"facebook"} onClick={(value) => { singInWithProvider(value) }} fullWidth={true} variant='outlined' color='primary'> Facebook </Button>
            </Grid>

            <Grid item  >
                <Button fullWidth={true} variant='outlined' color='primary'> Twitter </Button>
            </Grid>
            <Grid item  >

                <Button value='test' onClick={handleGithub} fullWidth={true} variant='outlined' color='primary'> Github </Button>

            </Grid>
            <Grid item  >

                <Typography variant='body1' color='secondary'> {firebaseError} </Typography>

            </Grid>
        </Grid>
    )
}