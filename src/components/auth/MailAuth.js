import React, { useState, useEffect } from "react";
import firebase from "../../services/firebase";
import { signInWithGoogle, auth } from "../../services/firebase";

export default function MailAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userData) => {
      setUser(userData);
      console.log("userData", userData);
    });
  }, []);
  return (
    <div>
      <p>MailAuth</p>
      {user ? (
        <button onClick={() => auth.signOut()}>sign out</button>
      ) : (
        <button onClick={signInWithGoogle}>sign in</button>
      )}
    </div>
  );
}
