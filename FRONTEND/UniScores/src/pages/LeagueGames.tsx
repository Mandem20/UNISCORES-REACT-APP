import { Link, Outlet, useLocation, useParams } from 'react-router-dom'
import '../styles/LeaugeGames.scss'
import { useEffect } from 'react';

const LeagueGames = () => {
  const { id } = useParams();
  const location = useLocation();

   const currentTab = location.pathname.split("/").pop();

  const getLeaugeData = async () => {
    
  }

  useEffect(() => {
    getLeaugeData()
  }, [id])

  return (
    <div className="league-games-container">
      <div className="league-wrapper">
        <div className="heading">
          <span className="league-logo">@</span>
          <div className="league-info">
              <div className="league-title">Champions League</div>
              <div className="league-group">Group A</div>
          </div>
        </div>

        <div className="tab-links">
          <Link to="news" className={currentTab === "news" ? "tab-link-active" : "tab-link-inactive"}>
            <span>News</span>
          </Link>
          <Link to="results" className={currentTab === "results" ? "tab-link-active" : "tab-link-inactive"}>
            <span>Results</span>
          </Link>
          <Link to="fixtures" className={currentTab === "fixtures" ? "tab-link-active" : "tab-link-inactive"}>
            <span>Fixtures</span>
          </Link>

        </div>

        <div className="match-list">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default LeagueGames