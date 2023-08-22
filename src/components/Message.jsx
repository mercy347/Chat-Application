
import { SignInContext } from "../context/signInContext";
import { useContext } from "react";
import { auth } from "../firebase/firebaseconfig";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseconfig";

const Message = ({ message }) => {
const {User} = useContext(SignInContext)

  
  const createdAtDate = message.createdAt ? message.createdAt.toDate() : new Date()

  
  let hours = createdAtDate.getHours();
  let minutes = createdAtDate.getMinutes();

  
if (minutes < 10) {
  minutes = `0${minutes}`;
}

const deleteMessage = async (messageId) => {
  
  if (message.uid === auth.currentUser.email) {
    
    const messageRef = doc(db, "messages", messageId);

    
    await deleteDoc(messageRef);
  } else {
    
    console.log("You can only delete messages that you have sent.");
  }
}

  
  const timestamp = `${hours}:${minutes}`;
  const messageClass = message.uid === auth.currentUser.email ? "chat-end" : "chat-start";

  return (
    <div>
      <div className={`chat `}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={message.avatar} />
          </div>
        </div>
        <div className="chat-header">{message.name}</div>
        <div className="chat-bubble chat-bubble-accent">{message.text}</div>
        <div>
          {timestamp}
          {message.uid === auth.currentUser.email && (
            <button onClick={() => deleteMessage(message.id)} className="btn-sm">
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
  
};

export default Message;