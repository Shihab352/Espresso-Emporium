import { createContext, useEffect, useState } from "react";
import {  createUserWithEmailAndPassword, FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from '../../Firebase/firebase.config'

export const AuthContext = createContext(null);


// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    // Social Media provider
    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider()
    const facebookProvider = new FacebookAuthProvider();

    const[user , setUser] = useState(null)
    
    const [loading , setLoading] = useState(true);

    // Create user with email & password
const createUser = (email , password) => {
    setLoading(true);
   return createUserWithEmailAndPassword(auth , email, password)
}
// Update User Profile
const updateUserProfile = (name , photoURL)=>{
    setLoading(true);
  return  updateProfile(auth.currentUser, {
        displayName: name, 
        photoURL: photoURL,
      })
}

// Sign In user
const signInUser = (email,password) =>{
setLoading(true);
    return signInWithEmailAndPassword(auth , email, password)
}

// Google Login
const googleLogin =()=>{
    setLoading(true);
   return signInWithPopup(auth, googleProvider);
}

// facebook Login
const facebookLogin = ()=>{
    setLoading(true);
    return signInWithPopup(auth , facebookProvider);
}

// GitHub Login
const gitHubLogin = ()=>{
    setLoading(true);
    return signInWithPopup(auth , gitProvider);
}

// Reset Password
const resetPass = (email) => {
  return  sendPasswordResetEmail(auth, email)
 
}


// Logout
const logout = ()=>{
   
    setUser(null)
   return signOut(auth);
}

useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth , (user) => {
        if(user){
            setUser(user)
            setLoading(false);
        }
    })
    return ()=> unsubscribe();
},[])

const values = {
    createUser,
    signInUser,
    googleLogin,
    gitHubLogin,
    logout,
    facebookLogin,
    updateUserProfile,
    resetPass,
    loading,
    user
}

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;