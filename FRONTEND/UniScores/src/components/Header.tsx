import { Link } from "react-router-dom"
<<<<<<< HEAD
import '../styles/Header.scss'
import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
=======
import '../styles/Header.scss';
>>>>>>> 7e9a250315adb2b3a1331ecf25e20d2dc4183b71

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
<<<<<<< HEAD
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

=======
        <span className="logo">Uniscore</span>
        <div className="links">
            <Link to="">
              <div className="link-wrapper">
                <span>Favourite</span>
              </div>
            </Link>
            <Link to="">
              <div className="link-wrapper">
                <span>Livestream</span>
              </div>
            </Link>
            <Link to="">
              <div className="link-wrapper">
                <span>Highlight</span>
              </div>
            </Link>
            <Link to="">
              <div className="link-wrapper">
                <span>News</span>
              </div>
            </Link>
            <Link to="">
              <div className="link-wrapper">
                <span>Register</span>
              </div>
            </Link>
            <Link to="">
              <div className="link-wrapper">
                <span>Get the app</span>
              </div>
            </Link>
        </div>
>>>>>>> 7e9a250315adb2b3a1331ecf25e20d2dc4183b71
    </div>
  )
}

export default Header