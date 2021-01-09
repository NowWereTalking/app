function SignUp() {
  return (
    <div className="container">
      <div className="forms-container">
        <div className="login-register"></div>
        <form action="#" className="register-form">
          <h2 className="title">Register</h2>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input type="text" placeholder="Username" />
          </div>
          <div className="input-field">
            <i className="fas fa-envelope"></i>
            <input type="email" placeholder="Email" />
          </div>
          <div className="input-field">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Password" />
          </div>
          <input type="submit" className="btn" value="Register" />
        </form>
      </div>
    
    <div className="panels-container">
      <div className="panel right-panel">
        <div className="content">
          <h3>Ready to debate?</h3>
          <p>
            Login to begin the fun!
      </p>
          <button className="btn transparent" id="login-btn">
            Login
      </button>
        </div>
      </div>
    </div>
    </div>
    
    );
}

export default SignUp;