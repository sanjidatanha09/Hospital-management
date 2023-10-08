import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext =createContext(null);

const auth = getAuth(app);

//for google login 
const googleProvider = new GoogleAuthProvider

const AuthProvider = ({children}) => {
    const [user,setUser] =useState(null);
    const [loading , setLoading] =useState(true)

    //google login
    const googleSignIn = (value) =>{
       
    }


    //regitration login
    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    //simple login
    const signIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    //for logout button
    const logOUt = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() =>{
       const unSubscribe = onAuthStateChanged(auth, currentUser =>{

            console.log('user in the auth state changed',currentUser);
            setUser(currentUser);
           setLoading(false);
        })
        return () =>{
            unSubscribe();
        }

    }, [])

    const authInfo = {
        googleSignIn,
        user,
        loading,
        createUser,
        logOUt,
        signIn,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;