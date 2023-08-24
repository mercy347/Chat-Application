import { useContext,} from "react";
import { SignInContext } from "../context/signInContext";
import { useState } from 'react'
import { addDoc, serverTimestamp, collection } from "firebase/firestore";
import { db } from "../firebase/firebaseconfig";


const SendMessage = () => {
    const [value, setValue] = useState("")
    const  { uid: user_id, userName: name, photoURL} = useContext(SignInContext)

    const handleSend = async (e) =>{
        e.preventDefault()

        if(value.trim() === "") {
          alert("Enter valid message!")
          return
        }

        await addDoc(collection(db, "messages"), {
          text: value || null,
          name,
          createdAt: serverTimestamp(),
          avatar: photoURL || null,
          uid: user_id || null
        })
        setValue('')
    }

  return (
   < div className='bg-pink-500 fixed bottom-0 w-full py-10 shadow-lg'>
        <form onSubmit={handleSend} className='containerWrap flex items-center justify-center px-2'>
            <input value={value} onChange={e => setValue(e.target.value)} className='input w-100 focus:outline-none rounded-r-none' type="text"/>
            <button type='submit' className='w-auto text-black rounded-r-lg px-5 text-sm'>Send</button>
        </form>
    </div>
  )
}

export default SendMessage



