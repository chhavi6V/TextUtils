import About from "./About";
import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

import {
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () =>{
       if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = '#343a40';
        showAlert("Dark mode has been enabled", "success");
       }
       else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enabled", "success");
       }
  }

  return (
    <>     
          <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
          <Alert alert={alert}/>
          <div className="container my-3">
         
          <Route path="/about">
            <About mode={mode}/>
            </Route>
          < Route exact path="/" >
            <Textform showAlert={showAlert} heading="Try TextUtils - Word counter, Character counter" mode={mode}/>
          </Route>
        
          </div>
    </>
  );
}

export default App;
