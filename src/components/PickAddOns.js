import React from 'react'
import Submit from './Submit';


const PickAddOns = (props) => {




  
  return (
    <>
       
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
                    <div onClick={(e)=>props.handelButton(props.page-1)}><span>Go back</span></div>
                  <div>
                    <button onClick={(e)=>props.handelButton(props.page+1)}>Next Step</button>
                  </div>
                </div>
              </div>
            
    </>
  )
}

export default PickAddOns;