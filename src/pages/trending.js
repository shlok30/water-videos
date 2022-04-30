import Sidebar from "../components/sidebar"
import VideoCard from "../components/video-card"
import { useVideos } from "../context/video-context"

const Trending = () => {

    const {videoLibrary} = useVideos()
    const trendingVideos = videoLibrary.filter((video) => video.isTrending)
    const renderTrendingVideos = () => {
        return(
            trendingVideos.map(({_id,title,creator,views}) => <VideoCard key = {_id} title = {title} creator = {creator} views = {views} />)
        )
    }

    return(
        <>
            <div className = "flex">
                <div className = "grow-1">
                    <Sidebar />
                </div>
                <div className="container center-block " style ={{width : "85%"}}>
                    <h2 className = "h-l m5-top">Trending Videos</h2>
                    <div className = "flex space-between gap-l m4-top self-start">
                        {renderTrendingVideos()}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Trending