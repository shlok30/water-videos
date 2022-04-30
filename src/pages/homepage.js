import HeroImage from "../components/hero"
import Sidebar from "../components/sidebar"
import VideoCard from "../components/video-card"
import { useVideos } from "../context/video-context"

const Homepage = () => {

    const {videoLibrary} = useVideos()

    console.log(videoLibrary)

    const renderVideoCards = () => {
        return(
            videoLibrary.map(({_id,title,creator,views}) => <VideoCard key = {_id} id = {_id} title = {title} creator = {creator} views = {views} />)
        )
    }

    return(
        <>
            <div class = "flex">
                <div className = "grow-1">
                    <Sidebar />
                </div>
                <div style ={{width:"85%"}} >
                    <HeroImage />
                    <div className={`container center-block flex ${videoLibrary.length%3 === 0 ? "space-between" : "space-around"} gap-l`}>
                        {renderVideoCards()}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage