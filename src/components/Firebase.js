import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

    const firebaseConfig = {
        apiKey: "AIzaSyDRhWmt22wpSDu47T1X8jwKc0s252b1ci0",
        authDomain: "reacttemplate-3726a.firebaseapp.com",
        databaseURL: "https://reacttemplate-3726a.firebaseio.com",
        projectId: "reacttemplate-3726a",
        storageBucket: "reacttemplate-3726a.appspot.com",
        messagingSenderId: "422691660602",
        appId: "1:422691660602:web:f0383006fb036fae242603",
        measurementId: "G-E1X2P3DKNB"
};

firebase.initializeApp(firebaseConfig);
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
const Auth = firebase.auth();
const  googleProvider = new firebase.auth.GoogleAuthProvider();
const  facebookProvider = new firebase.auth.FacebookAuthProvider();

googleProvider.addScope('profile');
googleProvider.addScope('email');

export {firebase as default, Auth, googleProvider, facebookProvider}
