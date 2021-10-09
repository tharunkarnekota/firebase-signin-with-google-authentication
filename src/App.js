import firebase from 'firebase';
import React,{useState,useEffect} from 'react';

firebase.initializeApp({
  apiKey: "AIzaSyDx1m5uVRHRk4-886N4J4194R3w_2m20II",
  authDomain: "sign-project-6db85.firebaseapp.com",
  projectId: "sign-project-6db85",
  storageBucket: "sign-project-6db85.appspot.com",
  messagingSenderId: "979431711880",
  appId: "1:979431711880:web:813d4b61a1c024eb6f2b3d"
})
const auth = firebase.auth();

const App = () => {
  const [presentUser,setPresentUser] = useState(null);

  useEffect(()=>{
    auth.onAuthStateChanged(user=> {
      if(user){
        setPresentUser(user)
      }
      else{
        setPresentUser(null)
      }
    })
  },[])

  const signIn = async () =>{
    try{
      await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }
    catch(err){
      console.log(err);
    }
  }

  return (
    <div>
        <center>
          { presentUser ?
              <div>
                <h1>Welcome to Pubg home page </h1>
                <button className="btn btn-primary" onClick={()=>auth.signOut()}>Sign Out</button>
              </div>
            :
              <div>
                <br />
                <h1>Pubg Game</h1>
                <button className="btn btn-primary" onClick={signIn}>Sign In With Google</button>
              </div>
          }
        </center>
    </div>
  )
}

export default App

