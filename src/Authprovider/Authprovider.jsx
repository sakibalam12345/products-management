import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../Firebase/Firebase.config";



export const AuthContext = createContext(null);
const auth = getAuth(app);
const gprovider = new GoogleAuthProvider();
// eslint-disable-next-line react/prop-types
const Authprovider = ({children}) => {

    const [user,setuser] = useState();
    const [loading,setloading] = useState(true)
    
    const createnewuser = (email,password)=>{
        setloading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const login = (email,password)=>{
        setloading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logout = ()=>{
        setloading(true)
        return signOut(auth)
    }

    const googlelogin = ()=>{
        setloading(true)
        return signInWithPopup(auth,gprovider)
    }

    useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,currentuser =>{
            console.log('from auth', currentuser)
            setuser(currentuser)
            setloading(false)
        })
        return ()=>{
            return unsubscribe()
        }
    },[])

    const authinfo = {
        user,loading,createnewuser,login,logout,googlelogin

    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;