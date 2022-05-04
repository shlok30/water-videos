import VideoCard from "../components/video-card"
import Sidebar from "../components/sidebar"

const WatchLaterPage = () => {
    return(
        <>
            <div className="flex">
                <div className="grow-1">
                    <Sidebar />
                </div>
                <div className="container center-block">
                    <h2 className = "h-l m5-top">Watch Later</h2>
                    <div className="flex gap-m m3-top">
                        <VideoCard />
                        <VideoCard />
                        <VideoCard />
                        <VideoCard />
                        <VideoCard />
                        <VideoCard />
                        <VideoCard />
                    </div>
                </div>
            </div>
        </>
    )
}

export default WatchLaterPage