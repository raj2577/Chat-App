import { useEffect, useState, useRef } from "react";
import {
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { auth, db } from "../firebase-config";
import Cookies from "universal-cookie";
import "./style/chat.css";

export default function Chat(props) {
  const { room } = props;
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const cookies = new Cookies();
  const userImage = cookies.get("profile-pic");

  const messagesRef = collection(db, "messages");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const queryMessages = query(
      messagesRef,
      where("room", "==", room),
      orderBy("createdAt")
    );
    const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
      const updatedMessages = [];
      snapshot.forEach((doc) => {
        updatedMessages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(updatedMessages);
    });

    return () => unsubscribe();
  }, [room]);

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newMessage === "") return;
    await addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      userImage: auth.currentUser.photoURL,
      room,
    });
    setNewMessage("");
  };

  return (
    <div className="chat-app">
      <div className="header">
        <h1>Room Name: {room.toUpperCase()}</h1>
      </div>

      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <span className="user">
              <img src={message.userImage || userImage} alt="Profile" />
              <p>{message.user}:</p>
            </span>{" "}
            <p className="message-text">{message.text}</p>
          </div>
        ))}
        <div ref={messagesEndRef}></div>
      </div>

      <form action="" className="new-message-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="new-message-input"
          placeholder="Type your message here..."
          onChange={(e) => setNewMessage(e.target.value)}
          value={newMessage}
        />
        <button type="submit" className="send-button">
          Send
        </button>
      </form>
    </div>
  );
}
