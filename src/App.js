import {useState} from 'react'
import C1 from "./c1.jpg";
import "./App.css";
function App() {
  const[projectdes,setProjectdes]=useState("");
  const[projectpass,setProjectpass]=useState("");
  
 const handlesubmit=()=>{
  fetch("https://62ce5762826a88972df9be65.mockapi.io/assignment/user", {
    method: 'POST',
    body: JSON.stringify({
      email: projectdes,
      password: projectpass,
     
    }),
    headers: {
      'Content-type': 'application/json',
    },
  })
 }
 
  return (
    <div className="App sep">
       
        <div className="split1 left bgc">
        <div className="centeredmedia">
                <img src={C1} alt="/"/>
              </div>
        </div>

        <div className="split2 right bgc">
              <div className="centeredmedia2 description bgc ">
                <h2>Login</h2>
                <div className="des active">
                  <input
                    type="email"
                    placeholder="email"
                    className="w3-input active borderforrightsection"
                    value={projectdes}
                    maxLength={100}
                    onChange={(e)=>{setProjectdes(e.target.value)}}
                  ></input>
                </div>
                <div className="des active">
                  <input
                    type="text"
                    placeholder="password"
                    className="w3-input active borderforrightsection"
                    value={projectpass}
                    maxLength={100}
                    onChange={(e)=>{setProjectpass(e.target.value)}}
                  ></input>

                </div>
                

                

                <div className="button" onclick={handlesubmit}>
                  Publish
                </div>
              </div>
            
        
    </div>
    </div>

  );
}

export default App;
