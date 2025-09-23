import '../styles/componentStyles/MatchNews.scss';

const MatchNews = () => {
  return (
    <div className="matchnews-container">
        <img src="#" alt="article-thumbnail" />
        <div className="content">
            <p className="title">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <div className="details">
                <span className="author-image"></span>
                <span className="author-name">YellowBoy</span>
                <span className="divider"></span>
                <span className="day-posted">3 days ago</span>
            </div>
        </div>
    </div>
  )
}

export default MatchNews