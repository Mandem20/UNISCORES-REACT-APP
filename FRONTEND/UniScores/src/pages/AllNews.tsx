import MatchNews from "../components/MatchNews"
import '../styles/AllNews.scss'

const AllNews = () => {
  return (
    <div className="all-news-container">
      <div className="all-news-wrapper">
        <MatchNews />
        <MatchNews />
        <MatchNews />
        <MatchNews />
        <MatchNews />
        <MatchNews />
        <MatchNews />
      </div>
    </div>
  )
}

export default AllNews