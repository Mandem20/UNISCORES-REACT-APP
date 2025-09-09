import { Link } from "react-router-dom"
import '../styles/Header.scss'
import { useRef, useState } from "react"

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const mobileViewLinks = useRef(null);

  const toggleMenuList = () => {
    setShowMenu((prev) => !prev)
  }


  return (
    <div className="header-container">
        <div className="logo">UNISCORES</div>
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
              ref={mobileViewLinks}
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