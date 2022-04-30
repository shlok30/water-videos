import HeroImage from "../components/hero"
import Sidebar from "../components/sidebar"
import VideoCard from "../components/video-card"

const Homepage = () => {
    return(
        <>
            <div class = "flex">
                <div className = "grow-1">
                    <Sidebar />
                </div>
                <div style ={{width:"85%"}} >
                    <HeroImage />
                    <div className='container center-block flex space-between gap-l'>
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

export default Homepage