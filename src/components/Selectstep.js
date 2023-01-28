import React from 'react'

const Selectstep = (componentsList) => {
    
  return (
    <>
        <div className="selectionArea">
              <div className="inputButton">
                <button value="var1">
                  1
                </button>
                <div>
                  <p>STEP 1</p>
                  <span>Your info</span>
                </div>
              </div>
              <div className="inputButton">
                <button value="var2" >
                  2
                </button>
                <div>
                  <p>STEP 2</p>
                  <span> SELECT PLAN</span>
                </div>
              </div>
              <div className="inputButton">
                <button value="var3">
                  3
                </button>
                <div>
                  <p>STEP 3</p>
                  <span>ADD-ONS</span>
                </div>
              </div>
              <div className="inputButton">
                <button value="var4" >
                  4
                </button>
                <div>
                  <p>STEP 4</p>
                  <span>SUMMARY</span>
                </div>
              </div>
            </div>
    </>
  )
}

export default Selectstep