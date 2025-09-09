import { Link } from "react-router-dom"
import '../styles/Header.scss'

const Header = () => {
  return (
    <div className="header-container">
        <div className="logo">UNISCORES</div>
        <div className="links">
          <Link to="">Favourites</Link>
          <Link to="">Livestream</Link>
          <Link to="">Highlights</Link>
          <Link to="">News</Link>
          <Link to="">Login</Link>
          <Link to="">Register</Link>
          <Link to="">Get the app</Link>
        </div>
    </div>
  )
}

export default Header