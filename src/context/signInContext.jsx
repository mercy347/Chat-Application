import { useState, useEffect, createContext } from "react";

import {auth, provider,db} from "../firebase/firebaseconfig"
import {signInWithPopup} from "firebase/auth"
import {collection,doc,setDoc} from 'firebase/firestore'





export const SignInContext = createContext()

export const SignInProvider = ({children})=>{
    const [currentUser, setUser] = useState('')
    const [userName, setUserName] = useState('')
    const [photoUrl,setphotoUrl] =useState('')
    const [Uid,setUid] =useState('')
    ;
 
    let handleClick = ()=> {
        signInWithPopup(auth, provider).then((data)=>{

          const uid =data.user.uid
          setUid(uid)


            setUser(data.user.email)
            setUserName(data.user.displayName)
            localStorage.setItem('Email', data.user.email)
            localStorage.setItem('Name', data.user.displayName)
            const userRef = collection(db,message)
            const userDocRef = doc(userRef,data.user.uid)
            setDoc(userDocRef,{
              uid:data.user.uid,
              displayName:data.user.displayName,
              photoUrl:data.user.photoURL
            },{merge:true})

           

           
            })
            }
        
        
    

    useEffect(()=>{
        setUser(localStorage.getItem('Email'))
        setUserName(localStorage.getItem('Name'))
    
    }, [])

    return (
        <SignInContext.Provider value={{currentUser, handleClick, userName,photoUrl,Uid}}>
          {children}
        </SignInContext.Provider>
      )


}

