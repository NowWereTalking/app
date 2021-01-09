function SignIn() {
  return (
    <div className="container">
    <div className="forms-container">
      <div className="login-register">
        <form action="#" className="login-form">
          <h2 className="title">Login</h2>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input type="text" placeholder="Username" />
          </div>
          <div className="input-field">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Password" />
          </div>
          <input type="submit" value="Login" className="btn solid" />
        </form>
        </div>
      </div>
        
    <div className="panels-container">
    <div className="panel left-panel">
      <div className="content">
        <h3>New to Now We're Talking??</h3>
        <p>
          Join other users with similar interests and debate your favorite political topics!
        </p>
        <button className="btn transparent" id="register-btn">
         Register
        </button>
      </div>
      </div>
      </div>  
      </div>  
       );
      
}

export default SignIn;
 