import React from "react";
// import { googleProvider } from "../../../firebase/firebase";
import "./App.css";

function App() {
  // const handleSignIn = async () => {
  //   try {
  //     await googleSignIn();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <div className="App">
      <header className="App-header">
        <div className="border flex flex-col items-center md:w-1/2 m-auto p-14 rounded-3xl shadow-[5px_5px_15px_-1px_rgba(0,0,0,0.3)] z-50">
          <div className="flex justify-center items-center pb-20">
            <button
              // onClick={handleSignIn}
              className="py-1 ease-in duration-300  hover:scale-110"
            >
              Sign-in with Google
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
