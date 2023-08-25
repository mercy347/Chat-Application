

import { useEffect, useState } from "react";
import Message from "./Message"
import { collection, query, onSnapshot, orderBy, limit} from "firebase/firestore";
import { db, auth } from "../firebase/firebaseconfig";
import { Link } from "react-router-dom"

const Chatbox = () => {
const [messages, setMessages] = useState([])


useEffect(() =>{
  const q = query(collection(db, "messages"), orderBy("createdAt"), limit(50));
const unsubscribe = onSnapshot(q, (querySnapshot) => {
  const messages = [];
  querySnapshot.forEach((doc) => {
      messages.push({...doc.data(), id:doc.id});
  });
  setMessages(messages)
});
return () => unsubscribe
}, [])


return (
  <>
  <div className=" navbar bg-base-100  bg-gradient-to-r from-blue-600 to-pink-600 flex flex-row sticky top-0 z-10 space-x-9">
  <a className="btn btn-ghost normal-case text-3xl ">Chatify</a>

  <ul className="menu menu-horizontal bg-base-200 rounded-box mt-6 content-center space-x-9">
  <li>
    <Link to='/'>
    
      Home    
    </Link>
  </li>
</ul>
</div>
  <div className="pb-44 pt-2 w-full flex flex-col p-4  ">
    {messages.map((message) => {
      return (
        <Message
          key={message.id}
          message={message}
        />
      );
    })}
  </div>
  </>
);
}

export default Chatbox

