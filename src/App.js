import { useState } from "react";
import "./App.css";
import PersonalInfo from "./components/PersonalInfo";
import PickAddOns from "./components/PickAddOns";
import ConfirmPage from "./components/ConfirmPage";
import SelectPlan from "./components/SelectPlan";
// import Submit from "./components/Submit";



function App() {
 
let [page,setPage] =useState(0);


const handelButton = (number) =>{
  alert(number)
     setPage(number);
    
}
const componentsList= [
  <PersonalInfo  />,
  <SelectPlan  page={page} handelButton={handelButton}   />,
  <PickAddOns   page={page} handelButton={handelButton} />,
  <ConfirmPage  page={page} handelButton={handelButton} /> ,
  
 

];


  return (
    <div className="App">
      <div className="wrapper">
        <div className="Container">
          <div className="left-contentBox">
            <div className="selectionArea">
              <div className="inputButton">
                <button value="var1" onClick={()=>handelButton(0)} >
                  1
                </button>
                <div>
                  <p>STEP 1</p>
                  <span>Your info</span>
                </div>
              </div>
              <div className="inputButton">
                <button value="var2" onClick={()=>handelButton(1)}>
                  2
                </button>
                <div>
                  <p>STEP 2</p>
                  <span> SELECT PLAN</span>
                </div>
              </div>
              <div className="inputButton">
                <button value="var3" onClick={()=>handelButton(2)}>
                  3
                </button>
                <div>
                  <p>STEP 3</p>
                  <span>ADD-ONS</span>
                </div>
              </div>
              <div className="inputButton" onClick={()=>handelButton(4)}>
                <button value="var4" >
                  4
                </button>
                <div>
                  <p>STEP 4</p>
                  <span>SUMMARY</span>
                </div>
              </div>
            </div>
            
          </div>

          <div className="right-contentBox">
              {componentsList[page]}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
