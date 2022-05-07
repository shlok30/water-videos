import { useParams } from "react-router-dom"
import Sidebar from "../components/sidebar"
import VideoCard from "../components/video-card"
import { useUser } from "../context/user-context"
import dislikeVideo from "../context/user-functions/dislikeVideo"
import { useVideos } from "../context/video-context"
import renderVideoCards from "../functions/renderVideoCards"

const VideoPage = () => {
    
    const {videoId} = useParams()
    
    const {videoLibrary} = useVideos()

    const {addToWatchLater,userDispatch,userState,removeFromWatchlater,likeVideo} = useUser()

    const {title,creator,description,views,categoryName} = videoLibrary.find((video) => video["_id"] === videoId)

    const videosOfSameCategory = videoLibrary.filter((video) => video.categoryName === categoryName && video["_id"] !== videoId)

    //console.log(selectedVideoDetails)

    //Checking if this video is already in watchlater?
    const alreadyInWatchLater = userState.watchlater.filter((video) => video["_id"] === videoId)

    const alreadyInLikedVideos = userState.likes.filter((video) => video["_id"] === videoId)

    console.log("Already in watch later ?",alreadyInWatchLater)

    return(
        <>
            <div className = "flex no-wrap space-between">
                
                <Sidebar />

                <div className="half-width">
                    <h2 className = "h-l m5-top">{title}</h2>
                    <p className="text-s">{creator}</p>
                    <div className="m2-top">
                        <img src = "https://cdn.mos.cms.futurecdn.net/foW7FiHncAEnBbTu6d7KKA.jpg" alt = "Video Image" />
                    
                        <div className = "flex gap-m space-between m2-top">
                            <div className="flex gap-m">
                                <i class= {`material-icons cursor-pointer ${alreadyInLikedVideos.length > 0 ? "success-text-colour" : "primary-text-colour"}`} onClick = {() => alreadyInLikedVideos.length > 0 ? dislikeVideo(videoId,userDispatch) : likeVideo({"_id": videoId , title, creator, views},userDispatch)} >thumb_up</i>
                                <i class={`material-icons cursor-pointer ${alreadyInWatchLater.length > 0 ? "success-text-colour" :"primary-text-colour"}`} onClick = {() => alreadyInWatchLater.length > 0 ? removeFromWatchlater(videoId,userDispatch) : addToWatchLater({_id : videoId , title , creator ,description ,views , categoryName},userDispatch)} >schedule</i>
                                <i class="material-icons cursor-pointer primary-text-colour" >playlist_add</i>
                            </div>
                            <div className="flex gap-m">
                                <span>{views} Views</span>
                                <span>13 Hours Ago</span>
                            </div>
                        </div>
                    </div>

                    <div className="m3-top" style={{paddingTop : "1rem"}}>
                        <p className="wt-600">Description</p>
                        <p class="wt-300 grey-text m2-top">{description}</p>
                    </div>
                </div>

                <div className = "flex flex-column random gap-m padding-m-inline">
                    <h2 className = "h-l m5-top center-text">Must Watch</h2>
                    {renderVideoCards(videosOfSameCategory,"card-full-width")}
                </div>

            </div>
        </>
    )

}

export default VideoPage