import VideoCard from "../components/video-card"
import Sidebar from "../components/sidebar"
import { useUser } from "../context/user-context"
import renderVideoCards from "../functions/renderVideoCards"

const LikedVideos = () => {

    const {userState:{likes}} = useUser()

  return(
      <>
        <div className="flex">
            <div className={likes.length > 0 ? "grow-1" : ""}>
                <Sidebar />
            </div>
           
            <div className="container center-block">
            {
                likes.length === 0 ? <p className=" m3-top text-l error-colour-text">No Videos</p> 
                :
                <> 
                    <h2 className = "h-l m5-top">Liked Videos</h2>
                    <div className="flex gap-m m3-top self-start">
                        {renderVideoCards(likes)}
                    </div>
                </> }
            </div>
        </div>
      </>
  )  
}

export default LikedVideos