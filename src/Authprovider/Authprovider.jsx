import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../Firebase/Firebase.config";



export const AuthContext = createContext();
const auth = getAuth(app);
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


    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;