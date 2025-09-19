import { useNavigate } from 'react-router-dom'
import '../styles/Login.scss'
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const goToSignup = () => {
    navigate('/signup')
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

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (validate()) {
      console.log("Form submitted", formData);
    }
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
          <button 
            className="login-btn"
            onClick={handleLogin}
          >Login</button>
          <button className="with-google">Login with Google</button>

          <div className="switch-register">
            <p>Create an account?</p>
            <p className="signup" onClick={goToSignup}>Sign up</p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
