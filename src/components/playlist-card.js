import { Navigate, NavLink, useLocation, useNavigate, useParams } from "react-router-dom"
import { useUser } from "../context/user-context"
import addToPlaylist from "../context/user-functions/addToPlaylist"
import { useVideos } from "../context/video-context"

const PlaylistCard = ({title,numberOfVideos,videos,id,setModalActive}) => {

    const {videoId} = useParams()

    const {videoLibrary} = useVideos()

    const selectedVideo = videoLibrary.find((video) => video["_id"] === videoId ) //Checking in Video DB 

    const isVideoAlreadyInPlaylist = videos.find((video) => video["_id"] === videoId) //Checking in playlist videos array

    const {userDispatch,removeFromPlaylist} = useUser()

    const navigate = useNavigate()

    const location = useLocation()
 
    return(
        <div class="card-container flex flex-column text-card gap-m" >
	        <div class="card-header cursor-pointer">
    	        <h4>{title}</h4>
            </div>
            <div class="card-body">
                <p class="card-subtext">{numberOfVideos} Videos</p>
            </div>
            <div class="card-footer">
                {location.pathname !== "/playlists" ? 
                <>
                    <button className="btn btn-error full-width" onClick={() => !isVideoAlreadyInPlaylist ? addToPlaylist(selectedVideo,id,userDispatch,setModalActive) : removeFromPlaylist(id,videoId,userDispatch)}>{isVideoAlreadyInPlaylist ? "Remove from Playlist" : "Add to Playlist"}</button>
                    <button className = "m1-top btn btn-success full-width" onClick = {() => navigate(`/playlist/${id}`)}>View Playlist</button>
                </>
                :
                <>
                    <button className = "btn btn-success full-width" onClick = {() => navigate(`/playlist/${id}`)}>View Playlist</button>
                </>
                 }
                
            </div>
        </div>
    )
}

export default PlaylistCard