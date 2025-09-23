import '../styles/componentStyles/MatchResult.scss';

const MatchResult = () => {
  return (
    <div className="matchresult-container">
        <div className="time-date">
            <span>12.09.24</span>
            <span>3:00</span>
        </div>
        <div className="schools">
            <div className="first-school">
                <span>#</span>
                <span className="school-name">Methodist University Ghana</span>
            </div>
            <div className="second-school">
                <span>#</span>
                <span className="school-name">Kwame Nkrumah University of Science and Technology</span>
            </div>
        </div>
        <div className="scores">
            <span className="first-school-score">3</span>
            <span className="second-school-score">1</span>
        </div>
    </div>
  )
}

export default MatchResult