import '../styles/Home.scss'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();


    const viewAllLeaugeGames = (id: number) => {
        navigate(`/league_games/${id}`)
    }

    return (
        <div className="home-container">
            <div className="home-wrapper">
                <section className="one teams">
                    <input type="search" name="search" id="search" placeholder="Search for leagues, teams and matches"/>
                    <div className="hr-bar"></div>
                    <div className="recent-competitions">
                        <span className="competitions-title">Competitions</span>
                        <div className="recent-competitions-list">
                            <div className="item">
                                <span>@</span>
                                <span>TERTIARY CHAMPIONS LEAUGE see something crazy</span>
                            </div>
                            <div className="item">
                                <span>@</span>
                                <span>TERTIARY CHAMPIONS LEAUGE see something crazy</span>
                            </div>
                            <div className="item">
                                <span>@</span>
                                <span>TERTIARY CHAMPIONS LEAUGE see something crazy</span>
                            </div>
                            <div className="item">
                                <span>@</span>
                                <span>TERTIARY CHAMPIONS LEAUGE see something crazy</span>
                            </div>
                            <div className="item">
                                <span>@</span>
                                <span>TERTIARY CHAMPIONS LEAUGE see something crazy</span>
                            </div>
                        </div>
                        <span className="teams-title">Teams (A - Z)</span>
                        <div className="recent-competitions-list">
                            <div className="item">
                                <span>@</span>
                                <span>TERTIARY CHAMPIONS LEAUGE see something crazy</span>
                            </div>
                            <div className="item">
                                <span>@</span>
                                <span>TERTIARY CHAMPIONS LEAUGE see something crazy</span>
                            </div>
                            <div className="item">
                                <span>@</span>
                                <span>TERTIARY CHAMPIONS LEAUGE see something crazy</span>
                            </div>
                            <div className="item">
                                <span>@</span>
                                <span>TERTIARY CHAMPIONS LEAUGE see something crazy</span>
                            </div>
                            <div className="item">
                                <span>@</span>
                                <span>TERTIARY CHAMPIONS LEAUGE see something crazy</span>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="two match-scores">
                    <div className="date-selection">
                        <div className="match-dates">
                            <button className="item">
                                <span className="day">Monday</span>
                                <span className="date">09-09-25</span>
                            </button>
                            <button className="item">
                                <span className="day">Monday</span>
                                <span className="date">09-09-25</span>
                            </button>
                            <button className="item">
                                <span className="day">Monday</span>
                                <span className="date">09-09-25</span>
                            </button>
                            <button className="item">
                                <span className="day">Monday</span>
                                <span className="date">09-09-25</span>
                            </button>
                            <button className="item">
                                <span className="day">Monday</span>
                                <span className="date">09-09-25</span>
                            </button>
                        </div>
                        <input type="date" name="choose-date" id="choose-date" />
                    </div>
                    <div className="leagues-wrapper">
                        <div className="league-item">
                            <div className="league-header">
                                <span className="league-logo">@</span>
                                <div className="league-info">
                                    <div className="league-title">Champions League</div>
                                    <div className="league-group">Group A</div>
                                </div>
                                <span className="right-arrow" onClick={() => viewAllLeaugeGames(2)}>&rarr;</span>
                            </div>
                            <div className="match-details-wrapper">
                                <div className="league-match-details">
                                    <span className="star-stroke">&#9734;</span>
                                    <span className="time">4:00</span>
                                    <div className="teams">
                                        <div className="individual-team">
                                            <span className="team-logo">#</span>
                                            <span className="team-name">Methodist University Ghana</span>
                                        </div>
                                        <div className="individual-team">
                                            <span className="team-logo">#</span>
                                            <span className="team-name">Kwame Nkrumah University of Science and Technology</span>
                                        </div>
                                    </div>
                                    <div className="team-scores">
                                        <span className="first-score">3</span>
                                        <span className="second-score">1</span>
                                    </div>
                                </div>
                                <div className="league-match-details">
                                    <span className="star-stroke">&#9734;</span>
                                    <span className="time">4:00</span>
                                    <div className="teams">
                                        <div className="individual-team">
                                            <span className="team-logo">#</span>
                                            <span className="team-name">Methodist University Ghana</span>
                                        </div>
                                        <div className="individual-team">
                                            <span className="team-logo">#</span>
                                            <span className="team-name">Kwame Nkrumah University of Science and Technology</span>
                                        </div>
                                    </div>
                                    <div className="team-scores">
                                        <span className="first-score">3</span>
                                        <span className="second-score">1</span>
                                    </div>
                                </div>
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
                            <div className="match-details-wrapper">
                                <div className="league-match-details">
                                    <span className="star-stroke">&#9734;</span>
                                    <span className="time">4:00</span>
                                    <div className="teams">
                                        <div className="individual-team">
                                            <span className="team-logo">#</span>
                                            <span className="team-name">Methodist University Ghana</span>
                                        </div>
                                        <div className="individual-team">
                                            <span className="team-logo">#</span>
                                            <span className="team-name">Kwame Nkrumah University of Science and Technology</span>
                                        </div>
                                    </div>
                                    <div className="team-scores">
                                        <span className="first-score">3</span>
                                        <span className="second-score">1</span>
                                    </div>
                                </div>
                                <div className="league-match-details">
                                    <span className="star-stroke">&#9734;</span>
                                    <span className="time">4:00</span>
                                    <div className="teams">
                                        <div className="individual-team">
                                            <span className="team-logo">#</span>
                                            <span className="team-name">Methodist University Ghana</span>
                                        </div>
                                        <div className="individual-team">
                                            <span className="team-logo">#</span>
                                            <span className="team-name">Kwame Nkrumah University of Science and Technology</span>
                                        </div>
                                    </div>
                                    <div className="team-scores">
                                        <span className="first-score">3</span>
                                        <span className="second-score">1</span>
                                    </div>
                                </div>
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
                            <div className="match-details-wrapper">
                                <div className="league-match-details">
                                    <span className="star-stroke">&#9734;</span>
                                    <span className="time">4:00</span>
                                    <div className="teams">
                                        <div className="individual-team">
                                            <span className="team-logo">#</span>
                                            <span className="team-name">Methodist University Ghana</span>
                                        </div>
                                        <div className="individual-team">
                                            <span className="team-logo">#</span>
                                            <span className="team-name">Kwame Nkrumah University of Science and Technology</span>
                                        </div>
                                    </div>
                                    <div className="team-scores">
                                        <span className="first-score">3</span>
                                        <span className="second-score">1</span>
                                    </div>
                                </div>
                                <div className="league-match-details">
                                    <span className="star-stroke">&#9734;</span>
                                    <span className="time">4:00</span>
                                    <div className="teams">
                                        <div className="individual-team">
                                            <span className="team-logo">#</span>
                                            <span className="team-name">Methodist University Ghana</span>
                                        </div>
                                        <div className="individual-team">
                                            <span className="team-logo">#</span>
                                            <span className="team-name">Kwame Nkrumah University of Science and Technology</span>
                                        </div>
                                    </div>
                                    <div className="team-scores">
                                        <span className="first-score">3</span>
                                        <span className="second-score">1</span>
                                    </div>
                                </div>
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
                            <div className="match-details-wrapper">
                                <div className="league-match-details">
                                    <span className="star-stroke">&#9734;</span>
                                    <span className="time">4:00</span>
                                    <div className="teams">
                                        <div className="individual-team">
                                            <span className="team-logo">#</span>
                                            <span className="team-name">Methodist University Ghana</span>
                                        </div>
                                        <div className="individual-team">
                                            <span className="team-logo">#</span>
                                            <span className="team-name">Kwame Nkrumah University of Science and Technology</span>
                                        </div>
                                    </div>
                                    <div className="team-scores">
                                        <span className="first-score">3</span>
                                        <span className="second-score">1</span>
                                    </div>
                                </div>
                                <div className="league-match-details">
                                    <span className="star-stroke">&#9734;</span>
                                    <span className="time">4:00</span>
                                    <div className="teams">
                                        <div className="individual-team">
                                            <span className="team-logo">#</span>
                                            <span className="team-name">Methodist University Ghana</span>
                                        </div>
                                        <div className="individual-team">
                                            <span className="team-logo">#</span>
                                            <span className="team-name">Kwame Nkrumah University of Science and Technology</span>
                                        </div>
                                    </div>
                                    <div className="team-scores">
                                        <span className="first-score">3</span>
                                        <span className="second-score">1</span>
                                    </div>
                                </div>
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
                            <div className="match-details-wrapper">
                                <div className="league-match-details">
                                    <span className="star-stroke">&#9734;</span>
                                    <span className="time">4:00</span>
                                    <div className="teams">
                                        <div className="individual-team">
                                            <span className="team-logo">#</span>
                                            <span className="team-name">Methodist University Ghana</span>
                                        </div>
                                        <div className="individual-team">
                                            <span className="team-logo">#</span>
                                            <span className="team-name">Kwame Nkrumah University of Science and Technology</span>
                                        </div>
                                    </div>
                                    <div className="team-scores">
                                        <span className="first-score">3</span>
                                        <span className="second-score">1</span>
                                    </div>
                                </div>
                                <div className="league-match-details">
                                    <span className="star-stroke">&#9734;</span>
                                    <span className="time">4:00</span>
                                    <div className="teams">
                                        <div className="individual-team">
                                            <span className="team-logo">#</span>
                                            <span className="team-name">Methodist University Ghana</span>
                                        </div>
                                        <div className="individual-team">
                                            <span className="team-logo">#</span>
                                            <span className="team-name">Kwame Nkrumah University of Science and Technology</span>
                                        </div>
                                    </div>
                                    <div className="team-scores">
                                        <span className="first-score">3</span>
                                        <span className="second-score">1</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="three league-standings">
                </section>
            </div>
        </div>
    )
}

export default Home