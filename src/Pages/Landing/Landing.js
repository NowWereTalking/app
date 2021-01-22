import React, { useState, useRef } from "react";


function Landing() {



  const [loading, setLoading] = useState(false)
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [currentPage, setcurrentPage] = useState("")


  const container = useRef(null)

  return (
    <div>


      <title>Login &amp; Sign up Form</title>
      <div className="container" ref={container}>
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form">
              <h2 className="title">Login</h2>
              <div className="input-field">
                <i className="fas fa-user" />
                <input type="text" placeholder="Username" onKeyUp={(e) => { setEmail(e.currentTarget.value) }} />
              </div>
              <div className="input-field">
                <i className="fas fa-lock" />
                <input type="password" placeholder="Password" onKeyDown={ (e) => setPassword(e.target.value)}/>
              </div>
              <input type="submit" defaultValue="Login" className="btn solid" onClick={(e) => {
                e.preventDefault()
                console.log("this is where we login", username)
                console.log("this is where we sign the user up")
           
                console.log("form data is",  email, password)

                fetch('/api/login', {
                  method: "POST",
                  redirect : 'follow', 
                  headers: {
                    'Content-Type': "application/json", 
                    Accept : "application/json"
                  },
                  credentials : "include", 
                  body: JSON.stringify({
                    email: email, password: password
                  })
                }).then( res => {
                  if(res.redirected){
                    console.log(res)
                    window.location.href = res.url 
                  }
                })

              }} />
            </form>
            <form action="#" className="sign-up-form">
              <h2 className="title">Sign up</h2>

              <div className="input-field">
                <i className="fas fa-envelope" />
                <input type="email" placeholder="Email" onKeyDown={ (e) => setEmail(e.target.value)} />
              </div>
              <div className="input-field">
                <i className="fas fa-lock" />
                <input type="password" placeholder="Password" onKeyDown={ (e) => setPassword(e.target.value)} />
              </div>
              <input type="submit" className="btn" defaultValue="Sign up" onClick={(e) => {
                console.log("this is where we sign the user up")
           
                console.log("form data is",  email, password)
                fetch('/api/signup', {
                  method: "POST",
                  headers: {
                    'Content-Type': "application/json", 
                    Accept : "application/json"
                  },
                  redirect : 'follow', 
                  credentials : "include", 
                  body: JSON.stringify({
                    email: email, password: password
                  })
                }).then( res => {
                  if(res.redirected){
                    console.log(res)
                    window.location.href = res.url 
                  }
                })
              }} />
            </form>
          </div>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New to Now We're Talking?</h3>
              <p>
                Join other users with similar interests and debate your favorite political topics!
                </p>
              <button className="btn transparent" id="sign-up-btn" onClick={(e) => {
                console.log(container.current.classList.add("sign-up-mode"))

              }}>
                Sign up
                </button>
            </div>
            <img src="img/groupimage.png" className="image" alt />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>Ready to Debate?</h3>
              <p>
                Login to begin the fun!! Meet new people with similar interests while improving your debating skills.
                </p>
              <button className="btn transparent" id="sign-in-btn" onClick={(e) => {
                console.log(container.current.classList.remove("sign-up-mode"))
              }}>
                Login
                </button>
            </div>
            <img src="img/podium.png" className="image" alt />
          </div>
        </div>
      </div>
    </div>
  );

}

export default Landing;
