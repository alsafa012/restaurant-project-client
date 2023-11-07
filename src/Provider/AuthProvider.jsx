import React, { createContext, useEffect, useState } from "react";
import {
     GoogleAuthProvider,
     createUserWithEmailAndPassword,
     getAuth,
     onAuthStateChanged,
     signInWithEmailAndPassword,
     signInWithPopup,
  
     signOut,
  
     updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {

     const [loader, setLoader] = useState(true);
     const [user, setUser] = useState(null);
     // sign in with google account
     const googleSignIn = (value) => {
          setLoader(true);
          return signInWithPopup(auth, provider);
     };
     // create a new user
     const createUser = (email, password) => {
          setLoader(true);
          return createUserWithEmailAndPassword(auth, email, password);
     };
     // sign in with email and password
     const userSignIn = (email, password) => {
          setLoader(true);
          return signInWithEmailAndPassword(auth, email, password);
     };
     // User Profile updates
     const updateUserProfile = (name, photo) => {
          return updateProfile(auth.currentUser, {
               displayName: name,
               photoURL: photo,
          });
     };
     // sign out user
     const userSignOut = () => {
          setLoader(true);
          return signOut(auth);
     };

     //hold user information
     useEffect(() => {
          const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
               const userEmail = currentUser?.email || user?.email
               const loggedUser = {email:userEmail}

               setUser(currentUser);
               console.log(currentUser);
               setLoader(false);
               if(currentUser){
                    axios.post('https://restaurant-project-server.vercel.app/jwt',loggedUser,{withCredentials:true})
                    .then(res=>{
                         console.log('token res ', res.data);
                    })
               }else{
                    axios.post('https://restaurant-project-server.vercel.app/logout',loggedUser,{withCredentials:true})
                    .then(res=>{
                         console.log(res.data);
                    })
               }
          });
          return () => {
               unSubscribe();
          };
     }, [user?.email]);

     const authInfo = {
          user,
          loader,
          googleSignIn,
          createUser,
          userSignIn,
          userSignOut,
          updateUserProfile,
     };
     return (
          <AuthContext.Provider value={authInfo}>
               {children}
          </AuthContext.Provider>
     );
};

export default AuthProvider;
