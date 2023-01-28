import { useState } from "react";
import "./App.css";
import PersonalInfo from "./components/PersonalInfo";
import DurationTime from "./components/DurationTime";
import ConfirmPage from "./components/ConfirmPage";
import SelectPlan from "./components/SelectPlan";


const componentsList= [
  <PersonalInfo/>,
  <SelectPlan/>,
  <DurationTime/>,
  <ConfirmPage/>
 
 

];

function App() {
 
let [page,setPage] =useState(0);

const handelButtonOne = () =>{
     setPage(page=0);
    
}
const handelButtonTwo = () =>{
  setPage([page=1]);
 
}
const handelButtonThree = () =>{
  setPage(page=2);
 
}
const handelConfirm = () =>{
   setPage(page=3)
}
const goBack = () =>{
  if(page==0){
    return;
  }else{
    setPage(page-1);
  }
}
const handelNext = () =>{
  if(page==4){
    return;
  }else{
    setPage(page+1);
  }
}

  

  return (
    <div className="App">
      <div className="wrapper">
        <div className="Container">
          <div className="left-contentBox">
            <div className="selectionArea">
              <div className="inputButton">
                <button value="var1" onClick={handelButtonOne} >
                  1
                </button>
                <div>
                  <p>STEP 1</p>
                  <span>Your info</span>
                </div>
              </div>
              <div className="inputButton">
                <button value="var2" onClick={handelButtonTwo}>
                  2
                </button>
                <div>
                  <p>STEP 2</p>
                  <span> SELECT PLAN</span>
                </div>
              </div>
              <div className="inputButton">
                <button value="var3" onClick={handelButtonThree}>
                  3
                </button>
                <div>
                  <p>STEP 3</p>
                  <span>ADD-ONS</span>
                </div>
              </div>
              <div className="inputButton" onClick={handelConfirm}>
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









            {/* {(result.var1)&& (
              <div className="content contentOne">
                <div>
                  <h1>Personal Info </h1>
                  <p>Please provide your name,email address and phone number</p>
                </div>
                <div>
                  <label htmlFor="Name">
                    Name:
                    <br />
                    <input type="text" required />
                  </label>
                  <br />
                  <br />
                  <label htmlFor="Email">
                    Email Adress:
                    <br />
                    <input type="email" required />
                  </label>
                  <br />
                  <br />
                  <label htmlFor="Phone">
                    Name:
                    <br />
                    <input type="number" required />
                  </label>
                </div>

                <div id="button">
                  <button>Next Step</button>
                </div>
              </div>
            )}
            {result.var2 && (
              <div className="content contentTwo">
                <div className="contentTwo divOne">
                  <h1>Select Your plan </h1>
                  <p>you have the option of monthly and yearly</p>
                </div>
                <div className="contentTwo divTwo">
                  <div className="insideDivOfDivTwo">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <circle cx="20" cy="20" r="20" fill="#F9818E" />
                        <path
                          fill="#FFF"
                          fill-rule="nonzero"
                          d="M25.057 15H14.944C12.212 15 10 17.03 10 19.885c0 2.857 2.212 4.936 4.944 4.936h10.113c2.733 0 4.943-2.08 4.943-4.936S27.79 15 25.057 15ZM17.5 20.388c0 .12-.108.237-.234.237h-1.552v1.569c0 .126-.138.217-.259.217H14.5c-.118 0-.213-.086-.213-.203v-1.583h-1.569c-.126 0-.217-.139-.217-.26v-.956c0-.117.086-.213.202-.213h1.584v-1.554c0-.125.082-.231.203-.231h.989c.12 0 .236.108.236.234v1.551h1.555c.125 0 .231.083.231.204v.988Zm5.347.393a.862.862 0 0 1-.869-.855c0-.472.39-.856.869-.856.481 0 .87.384.87.856 0 .471-.389.855-.87.855Zm1.9 1.866a.86.86 0 0 1-.87-.852.86.86 0 0 1 .87-.855c.48 0 .87.38.87.855a.86.86 0 0 1-.87.852Zm0-3.736a.862.862 0 0 1-.87-.854c0-.472.39-.856.87-.856s.87.384.87.856a.862.862 0 0 1-.87.854Zm1.899 1.87a.862.862 0 0 1-.868-.855c0-.472.389-.856.868-.856s.868.384.868.856a.862.862 0 0 1-.868.855Z"
                        />
                      </g>
                    </svg>
                    <div>
                      <span>Arcade</span>
                      <br />
                      <p>&#36;9/mo</p>
                    </div>
                  </div>
                  <div className="insideDivOfDivTwo">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <circle cx="20" cy="20" r="20" fill="#FFAF7E" />
                        <path
                          fill="#FFF"
                          fill-rule="nonzero"
                          d="M24.995 18.005h-3.998v5.998h-2v-5.998H15a1 1 0 0 0-1 1V29a1 1 0 0 0 1 1h9.995a1 1 0 0 0 1-1v-9.995a1 1 0 0 0-1-1Zm-5.997 8.996h-2v-1.999h2v2Zm2-11.175a2.999 2.999 0 1 0-2 0v2.18h2v-2.18Z"
                        />
                      </g>
                    </svg>
                    <div>
                      <span>Advanced</span>
                      <br />
                      <p>&#36;12/mo</p>
                    </div>
                  </div>
                  <div className="insideDivOfDivTwo">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <circle cx="20" cy="20" r="20" fill="#483EFF" />
                        <path
                          fill="#FFF"
                          fill-rule="nonzero"
                          d="M26.666 13H13.334A3.333 3.333 0 0 0 10 16.333v7.193a3.447 3.447 0 0 0 2.14 3.24c1.238.5 2.656.182 3.56-.8L18.52 23h2.96l2.82 2.966a3.2 3.2 0 0 0 3.56.8 3.447 3.447 0 0 0 2.14-3.24v-7.193A3.333 3.333 0 0 0 26.666 13Zm-9.333 6H16v1.333a.667.667 0 0 1-1.333 0V19h-1.333a.667.667 0 0 1 0-1.334h1.333v-1.333a.667.667 0 1 1 1.333 0v1.333h1.333a.667.667 0 1 1 0 1.334Zm7.333 2a2.667 2.667 0 1 1 0-5.333 2.667 2.667 0 0 1 0 5.333ZM26 18.333a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z"
                        />
                      </g>
                    </svg>
                    <div>
                      <span>pro</span>
                      <br />
                      <p>&#36;15/mo</p>
                    </div>
                  </div>
                </div>
                <div id="selectionOfDuration">
                  <span>Monthly</span>
                  <i class="fa-solid fa-toggle-of"></i>
                  <span>Yearly</span>
                </div>
                <div className="contentTwo divThree">
                  <span>Go back</span>
                  <div>
                    <button>Next Step</button>
                  </div>
                </div>
              </div>
            )}
            {result.var3 && (
              <div className="content contentThree">
                <div className="contentThree divOne">
                  <h1>Pick add-ons </h1>
                  <p>Add-ons help enhance your gaming experience</p>
                </div>
                <div className="contentThree divTwo">
                  <div className="insideDivOfDivTree">
                    <input type="checkbox" />
                    <div>
                      <span>Online services</span> <br />
                      <p>Access to multiplayer games</p>
                    </div>
                    <div>
                      <span>
                        +&#36;1/<p style={{ display: "inline" }}>mo</p>
                      </span>
                    </div>
                  </div>

                  <div className="insideDivOfDivTree">
                    <input type="checkbox" />
                    <div>
                      <span>Online services</span> <br />
                      <p>Access to multiplayer games</p>
                    </div>
                    <div>
                      <span>
                        +&#36;1/ <p style={{ display: "inline" }}> mo </p>
                      </span>
                    </div>
                  </div>
                  <div className="insideDivOfDivTree">
                    <input type="checkbox" />
                    <div>
                      <span>Online services</span> <br />
                      <p>Access to multiplayer games</p>
                    </div>
                    <div>
                      <span>
                        +&#36;1/ <p style={{ display: "inline" }}> mo </p>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="contentThree divThree">
                  <span>Go back</span>
                  <div>
                    <button>Next Step</button>
                  </div>
                </div>
              </div>
            )}
            {result.var4 && (
              <div className="content contentFour">
                <div className="contentFour divOne">
                  <h1>Finishing up</h1>
                  <p>Double-check everything looks Ok before confirming </p>
                </div>
                <div className="contentFour divTwo">
                  <div className="contentFourInsideDivTwo">
                    <span>
                      Arcade(Monthly) <br />
                      <a href="#">Change</a>
                    </span>
                    <span>&#36;9/mo</span>
                  </div>
                  <br />
                  <hr />
                  <br />
                  <div className="contentFourInsideDivTwo">
                    <p>Online services</p>
                    <p>&#36;6/mo</p>
                  </div>
                  <br />
                  <div className="contentFourInsideDivTwo">
                    <p> Large storage</p>
                    <p>&#36;3/mo</p>
                  </div>
                </div>
                <div
                  className="contentFour DivThree"
                  style={{ color: "hsl(243, 100%, 62%)" }}
                >
                  <p>total(per month)</p>
                  <span>&#36;3/mo</span>
                </div>

                <div className="contentFour  DivFour">
                  <span>Go back</span>
                  <div>
                    <button>Confirm</button>
                  </div>
                </div>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
