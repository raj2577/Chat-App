import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import Cookies from "universal-cookie";
const cookies = new Cookies();
import "./style/auth.css";

const Auth = (props) => {
  const { setIsAuth } = props;
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const { refreshToken, photoURL } = result.user;

      cookies.set("auth-token", refreshToken);
      cookies.set("profile-pic", photoURL); // Set the profile picture URL in the cookie

      setIsAuth(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="auth">
      <button className="sign-out" onClick={signInWithGoogle}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png"
          alt=""
        />
      </button>
      <p> Sign in with Google to continue</p>
    </div>
  );
};

export default Auth;
