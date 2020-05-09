import React, {useState, useEffect, useContext, useReducer} from 'react'
import NavBar from '../components/NavBar'
import Counter from '../components/Counter'
import AppNavBar from '../components/NavBar'
import Firebase from '../components/Firebase.js'


export default function Home(props){
    console.log(Firebase.auth())
    return(
        <div>
            <h1>Home </h1> 
            <Counter/>
        </div>
    )
}