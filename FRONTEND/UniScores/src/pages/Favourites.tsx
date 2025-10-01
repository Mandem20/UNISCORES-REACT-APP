import MatchFixtures from "../components/MatchFixtures"
import '../styles/Favourites.scss'

const Favourites = () => {
  return (
    <div className="favourites-page-container">
      <div className="favourites-page-wrapper">
        <div className="league-item">
          <div className="league-header">
            <span className="league-logo">@</span>
            <div className="league-info">
                <div className="league-title">Champions League</div>
                <div className="league-group">Group A</div>
            </div>
            <span className="right-arrow">&rarr;</span>
          </div>
          <div className="favourited-matches">
            <MatchFixtures />
            <MatchFixtures />
            <MatchFixtures />
            <MatchFixtures />
          </div>
        </div>
        <div className="league-item">
          <div className="league-header">
            <span className="league-logo">@</span>
            <div className="league-info">
                <div className="league-title">Champions League</div>
                <div className="league-group">Group A</div>
            </div>
            <span className="right-arrow">&rarr;</span>
          </div>
          <div className="favourited-matches">
            <MatchFixtures />
            <MatchFixtures />
            <MatchFixtures />
            <MatchFixtures />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Favourites