import React from 'react'

const DurationTime = (componentsList) => {
  
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
                    <div><span>Go back</span></div>
                  <div>
                    <button >Next Step</button>
                  </div>
                </div>
              </div>
            
    </>
  )
}

export default DurationTime;