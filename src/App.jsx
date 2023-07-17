import Auth from "./components/Auth";
import { useState, useRef } from "react";
import Cookies from "universal-cookie";
import Chat from "./components/Chat";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import "./App.css";

const cookie = new Cookies();

const App = () => {
  const [isAuth, setIsAuth] = useState(cookie.get("auth-token"));
  const [room, setroom] = useState(null);
  const roomInputRef = useRef(null);
  const signUserOut = async () => {
    await signOut(auth);
    cookie.remove("auth-token");
    setIsAuth(false);
    setroom(null);
  };

  if (!isAuth) {
    return (
      <div>
        <Auth setIsAuth={setIsAuth} />
      </div>
    );
  }

  return (
    <>
      {room ? (
        <Chat room={room} />
      ) : (
        <div className="room">
          <div className="items">
            <form action="">
              <input placeholder="Enter Room" type="text" ref={roomInputRef} />
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  setroom(roomInputRef.current.value);
                }}
              >
                {" "}
                Enter Chat
              </button>
            </form>
          </div>
        </div>
      )}
      <button className="signout" onClick={signUserOut}>
        Sign Out{" "}
        <img
          src="https://cdn-icons-png.flaticon.com/512/126/126467.png"
          alt=""
        />
      </button>
    </>
  );
};

export default App;
