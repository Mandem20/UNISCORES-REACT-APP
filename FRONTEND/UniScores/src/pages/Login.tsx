import '../styles/Login.scss'

const Login = () => {
  return (
    <div className="login-container">
      <div className="card">
        <form>
          <h2>Login</h2>
          <div className="email">
            <input type="email" name="email" id="email" placeholder="Email address" />
          </div>
          <div className="password">
            <input type="password" name="password" id="password" placeholder="Password" />
          </div>
          <button className="login-btn">Login</button>
          <button className="with-google">Login with Google</button>

          <div className="switch-register">
            <p>Already have an account?</p>
            <p className="signup">Sign up</p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login