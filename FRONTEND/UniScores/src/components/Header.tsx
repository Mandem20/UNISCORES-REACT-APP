import { Link } from "react-router-dom"
import '../styles/Header.scss'
import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const mobileViewLinksRef = useRef(null);
  const navigate = useNavigate();

  // Toggling operations 
  const toggleMenuList = () => {
    setShowMenu((prev) => !prev)
  }

  // Routing operations 
  const goToHome = () => {
    navigate('/')
  }

  return (
    <div className="header-container">
        <div 
          className="logo"
          onClick={goToHome}
        >UNISCORES</div>
        <div className="links">
          <Link to="favourites">Favourites</Link>
          <Link to="">Livestream</Link>
          <Link to="">Highlights</Link>
          <Link to="">News</Link>
          <Link to="login">Login</Link>
          <Link to="signup">Register</Link>
          <Link to="">Get the app</Link>
        </div>

        <div 
          className="burger-icon"
          onClick={toggleMenuList}
        >=</div>

        {
          showMenu === true ? 
            <div 
              className="links-for-mobile"
              ref={mobileViewLinksRef}
            >
              <Link to="favourites">Favourites</Link>
              <Link to="">Livestream</Link>
              <Link to="">Highlights</Link>
              <Link to="">News</Link>
              <Link to="login">Login</Link>
              <Link to="signup">Register</Link>
              <Link to="">Get the app</Link>
            </div>
          : null

        }

    </div>
  )
}

export default Header