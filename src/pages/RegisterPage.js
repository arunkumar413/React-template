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
import Login from '../components/Login'
import Register from '../components/Register'
import Firebase from '../components/Firebase'
import { Link, useHistory } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function RegisterPage(props) {

    const classes = useStyles();
    let BrowserHistory = useHistory();
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const [userInfo, setUserInfo] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState('')


    return (
        <div>
            <Container>
                <Grid container justify='center' alignItems='stretch' direction='row' spacing={1}>
                    <Grid item xs={12} sm={6}>
                        <Box borderRadius={8} m={1} p={4} boxShadow={3}>
                            <Register />
                            <Button onClick={()=>BrowserHistory.push('/login')} color='secondary'> Already have an account?</Button>
                        </Box>

                    </Grid>
                </Grid>
            </Container>
        </div>
    )

}