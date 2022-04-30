import Sidebar from "../components/sidebar"
import { useVideos } from "../context/video-context"
import renderVideoCards from "../functions/renderVideoCards"

const Trending = () => {

    const {videoLibrary} = useVideos()
    const trendingVideos = videoLibrary.filter((video) => video.isTrending)

    return(
        <>
            <div className = "flex">
                <div className = "grow-1">
                    <Sidebar />
                </div>
                <div className="container center-block " style ={{width : "85%"}}>
                    <h2 className = "h-l m5-top">Trending Videos</h2>
                    <div className = "flex space-between gap-l m4-top self-start">
                        {renderVideoCards(trendingVideos)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Trending