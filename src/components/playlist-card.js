import { useParams } from "react-router-dom"
import { useUser } from "../context/user-context"
import addToPlaylist from "../context/user-functions/addToPlaylist"
import { useVideos } from "../context/video-context"

const PlaylistCard = ({title,numberOfVideos,videos,id,setModalActive}) => {

    const {videoId} = useParams()

    const {videoLibrary} = useVideos()

    const selectedVideo = videoLibrary.find((video) => video["_id"] === videoId ) //Checking in Video DB 

    const isVideoAlreadyInPlaylist = videos.find((video) => video["_id"] === videoId) //Checking in playlist videos array

    const {userDispatch} = useUser()
 
    return(
        <div class="card-container flex flex-column text-card gap-m">
	        <div class="card-header">
    	        <h4>{title}</h4>
            </div>
            <div class="card-body">
                <p class="card-subtext">{numberOfVideos} Videos</p>
            </div>
            <div class="card-footer">
                <button className="btn btn-error full-width" onClick={() => !isVideoAlreadyInPlaylist ? addToPlaylist(selectedVideo,id,userDispatch,setModalActive) : console.log("Remove from Playlist")}>{isVideoAlreadyInPlaylist ? "Remove from Playlist" : "Add to Playlist"}</button>
            </div>
        </div>
    )
}

export default PlaylistCard