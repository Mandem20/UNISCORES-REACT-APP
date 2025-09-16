import { useNavigate } from 'react-router-dom'
import '../styles/Login.scss'
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFromData] = useState({
    email: "",
    password: "",
  });

  const goToSignup = () => {
    navigate('/signup')
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    if(name === "email") {
      setFromData({...formData, email: e.target.value})
    } else if (name === "password") {
      setFromData({...formData, password: e.target.value})
    }
  }

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log(formData)
  }


  return (
    <div className="login-container">
      <div className="card">
        <form>
          <h2>Login</h2>
          <div className="email">
            <input 
              type="email" 
              name="email" 
              id="email" 
              placeholder="Email address" 
              value={formData.email}
              onChange={(e) => handleOnChange(e)}
            />
          </div>
          <div className="password">
            <input 
              type="password" 
              name="password" 
              id="password" 
              placeholder="Password" 
              value={formData.password}
              onChange={(e) => handleOnChange(e)}
            />
          </div>
          <button 
            className="login-btn"
            onClick={handleLogin}
          >Login</button>
          <button className="with-google">Login with Google</button>

          <div className="switch-register">
            <p>Already have an account?</p>
            <p className="signup" onClick={goToSignup}>Sign up</p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login