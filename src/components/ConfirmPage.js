import React from 'react'


const ConfirmPage = (componentsList) => {
  return (
    <>
         
              <div className="content contentFour">
                <div className="contentFour divOne">
                  <h1>Finishing up</h1>
                  <p>Double-check everything looks Ok before confirming </p>
                </div>
                <div className="contentFour divTwo">
                  <div className="contentFourInsideDivTwo">
                    <span>
                      Arcade(Monthly) <br />
                      <a href= "#" >Change</a>
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
                  <span >Go back</span>
                  <div>
                    <button >Confirm</button>
                  </div>
                </div>
              </div>
            
    </>
  )
}

export default ConfirmPage