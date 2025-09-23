import { useState } from 'react';
import '../styles/componentStyles/MatchFixtures.scss';


const MatchFixtures = () => {
    const [favorited, setFavorited] = useState(false);

  return (
    <div className="matchfixture-container">
        <div 
            className="favorite"
            onClick={() => setFavorited((prev) => !prev)}
        >
            {
                favorited === true ?
                <span 
                    className="favorited"
                >&#9733;</span>
                :
                <span 
                    className="unfavorited"
                >&#9734;</span>
            }
        </div>
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
            <span className="first-school-score">-</span>
            <span className="second-school-score">-</span>
        </div>
    </div>
  )
}

export default MatchFixtures