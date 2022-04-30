import HeroImage from "../components/hero"
import Sidebar from "../components/sidebar"
import { useVideos } from "../context/video-context"
import renderVideoCards from "../functions/renderVideoCards"

const Homepage = () => {

    const {videoLibrary} = useVideos()

    return(
        <>
            <div class = "flex">
                <div className = "grow-1">
                    <Sidebar />
                </div>
                <div style ={{width:"85%"}} >
                    <HeroImage />
                    <div className={`container center-block flex self-start ${videoLibrary.length%3 === 0 ? "space-between" : "space-around"} gap-l`}>
                        {renderVideoCards(videoLibrary)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage