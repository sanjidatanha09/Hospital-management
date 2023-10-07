import React, { createContext } from 'react';
import app from "../firebase/firebase.config"
import{
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
} from  "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();


const Authprovider = ({children}) => {

    const googleSignIn = (value) =>{
         return signInWithPopup();
    };
    
    const AuthInfo ={
        googleSignIn,

    };

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;