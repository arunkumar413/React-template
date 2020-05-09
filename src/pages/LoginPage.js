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
import Login from '../components/Login'
import Register from '../components/Register'
import Firebase from '../components/Firebase'
import { Link, useHistory } from 'react-router-dom'
import { storeContext } from '../components/StoreContext';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function LoginPage() {

    const appStore = useContext(storeContext);


    const classes = useStyles();
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const [userInfo, setUserInfo] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState('')
    let BrowserHistory = useHistory();


 
    return (
        <div>
            <Container>
                <Grid container justify='center' alignItems='stretch' direction='row' spacing={1}>
                    <Grid item xs={12} sm={6}>
                        <Box borderRadius={8} m={1} p={4} boxShadow={3}>
                            <Login />
                            <Button onClick={()=>BrowserHistory.push('/register')} color='secondary'> Don't have an account?</Button> 
                            <Button color='secondary'> Forgot password?</Button> 
                        </Box>

                    </Grid>


                    {/* <Grid item xs={12} sm={6}>
                        <Box borderRadius={8} m={1} p={4} boxShadow={3}>


                        </Box>

                    </Grid> */}

                </Grid>
            </Container>
        </div>
    )

}