import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirm_password: "",
  })

  const goToLogin = () => {
    navigate("/login")
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    if(name === "email") {
      setFormData({...formData, email: e.target.value})
    } else if (name === "password") {
      setFormData({...formData, password: e.target.value})
    } else if (name === "confirm_password") {
      setFormData({...formData, confirm_password: e.target.value})
    }
  }

  const handleSignup = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
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
          <div className="password">
            <input 
              type="password" 
              name="confirm_password" 
              id="confirm-password" 
              placeholder="Confirm Password" 
              value={formData.confirm_password}
              onChange={(e) => handleOnChange(e)}
            />
          </div>
          <button 
            className="login-btn"
            onClick={handleSignup}
          >Signup</button>
          <button className="with-google">Signup with Google</button>

          <div className="switch-register">
            <p>Already have an account?</p>
            <p className="signup" onClick={goToLogin}>Login</p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup