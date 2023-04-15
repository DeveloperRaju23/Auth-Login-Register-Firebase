import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase.config';


export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProviders = ({children}) => {

    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const createSignIn =(email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const userInfo = {
            user,
            createUser,
            createSignIn,
    }

    return (
        <div>
           <AuthContext.Provider value={userInfo}>
                {children}
           </AuthContext.Provider>
        </div>
    );
};

export default AuthProviders;