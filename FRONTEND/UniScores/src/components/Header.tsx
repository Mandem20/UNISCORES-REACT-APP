import { Link } from "react-router-dom"
import '../styles/Header.scss';

const Header = () => {
  return (
    <div className="header-container">
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
    </div>
  )
}

export default Header