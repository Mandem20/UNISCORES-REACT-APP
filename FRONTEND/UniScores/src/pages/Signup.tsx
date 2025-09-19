import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Signup.scss'

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirm_password: "",
  })
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const goToLogin = () => {
    navigate("/login")
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: "", 
      });
    }
  }

  const validate = () => {
    let newErrors: { [key: string]: string } = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirm_password) {
      newErrors.confirm_password = "Please confirm your password";
    } else if (formData.confirm_password !== formData.password) {
      newErrors.confirm_password = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const handleSignup = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted", formData);
    }
  }

  return (
    <div className="login-container">
      <div className="card">
        <form>
          <h2>Signup</h2>
          <div className="email">
            <input 
              type="email" 
              name="email" 
              id="email" 
              placeholder="Email address" 
              value={formData.email}
              onChange={handleOnChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="password">
            <input 
              type="password" 
              name="password" 
              id="password" 
              placeholder="Password" 
              value={formData.password}
              onChange={handleOnChange}
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>
          <div className="password">
            <input 
              type="password" 
              name="confirm_password" 
              id="confirm-password" 
              placeholder="Confirm Password" 
              value={formData.confirm_password}
              onChange={handleOnChange}
            />
            {errors.confirm_password && <span className="error">{errors.confirm_password}</span>}
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
