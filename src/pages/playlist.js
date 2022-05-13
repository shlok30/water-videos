import VideoCard from "../components/video-card"
import Sidebar from "../components/sidebar"

const PlaylistPage = () => {

    return(
        <>
            <div className="flex">
                    <div className="grow-1">
                        <Sidebar />
                    </div>
                    <div className="container center-block">
                        <div className="flex space-between m5-top">
                            <h2 className = "h-l">My Playlist #1</h2>
                            <button className="btn btn-error">Delete Playlist</button>
                        </div>
                        <div className="flex gap-m space-between m3-top">
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

export default PlaylistPage