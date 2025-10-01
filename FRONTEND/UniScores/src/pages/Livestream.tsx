import Livematch from "../components/Livematch"
import '../styles/Livestream.scss'

const Livestream = () => {
    return (
    <div className="livestream-page-container">
      <div className="livestream-page-wrapper">
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
            <Livematch />
            <Livematch />
            <Livematch />
            <Livematch />
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
            <Livematch />
            <Livematch />
            <Livematch />
            <Livematch />
          </div>
        </div>
      </div>
    </div>
    )
}

export default Livestream