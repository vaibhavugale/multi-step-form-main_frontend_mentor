import React from 'react'

const PersonalInfo = (componentsList) => {
  
  return (
    <>
    
              <div className="content contentOne">
                <div>
                  <h1>Personal Info </h1>
                  <p>Please provide your name,email address and phone number</p>
                </div>
                <div>
                  <label htmlFor="Name">
                    Name:
                    <br />
                    <input type="text" required placeholder='Entre Your Name'/>
                  </label>
                  <br />
                  <br />
                  <label htmlFor="Email">
                    Email Address:
                    <br />
                    <input type="email" required placeholder='example@gmail.com'/>
                  </label>
                  <br />
                  <br />
                  <label htmlFor="Phone">
                    Phone:
                    <br />
                    <input type="tel" required  placeholder='+91 1234-5648'/>
                  </label>
                </div>

                <div id="button">
                  <button >Next Step</button>
                </div>
              </div>
             
    </>
  )
}

export default PersonalInfo