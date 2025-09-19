import { Link, Outlet, useParams } from 'react-router-dom'
import '../styles/LeaugeGames.scss'
import { useEffect } from 'react';

const LeagueGames = () => {
  const { id } = useParams();

  const getLeaugeData = async () => {
    
  }

  useEffect(() => {
    getLeaugeData()
  }, [id])

  return (
    <div className="league-games-container">
      <div className="wrapper">
        <div className="heading">
          <span className="league-logo">@</span>
          <div className="league-info">
              <div className="league-title">Champions League</div>
              <div className="league-group">Group A</div>
          </div>
        </div>

        <div className="tab-links">
          <Link to="news">
            <span>News</span>
          </Link>
          <Link to="results">
            <span>Results</span>
          </Link>
          <Link to="fixtures">
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