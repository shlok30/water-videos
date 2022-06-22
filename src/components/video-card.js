import { Link, useLocation, useNavigate, useParams } from "react-router-dom"
import { useUser } from "../context/user-context"

const VideoCard = ({width,id,title,creator,views,thumbnail}) => {

    const location = useLocation()

    const navigate = useNavigate()

    const {playlistId} = useParams()

    const path = location.pathname.split("/") // path[1] will contain "playlist" which will allow me to identify the location and conditionally render Remove from Playlist Button
    
    const {removeFromWatchlater,userDispatch,dislikeVideo,removeFromPlaylist,addToHistory,removeFromHistory} = useUser()

    const handleClick = () => { 
        
        addToHistory({"_id": id , title, creator, views, thumbnail},userDispatch)
        navigate(`/video/${id}`)

    }

    return(
        <div className={`card-container flex flex-column gap-m ${width}`}>
            <div className="img-container badge">
            <img src= {thumbnail}/>
            <span className="badge-icon">New</span>
            </div>

            <div className="card-header">
                <h4>{title}</h4>
                <p className="card-subtitle m1">{creator}</p>
            </div>
            
            <div className="card-body">
                <p className="card-subtext">{views} Views | 6 Hours Ago</p>
            </div>

            <div className="card-footer">
                <button className="btn btn-error full-width" onClick = {handleClick}>Watch Now</button>
                {location.pathname === "/watch-later" ? <button className="btn btn-primary full-width m2-top" onClick = {() => removeFromWatchlater(id,userDispatch)}>Remove From Watchlater</button> : null}
                {location.pathname === "/liked-videos" ? <button className="btn btn-primary full-width m2-top" onClick = {() => dislikeVideo(id,userDispatch)}>Dislike Video</button> : null}
                {path[1] === "playlist" ? <button className= "btn btn-primary full-width m2-top" onClick = {() => removeFromPlaylist(playlistId,id,userDispatch)}>Delete From Playlist</button> : null}
                {location.pathname === "/history" ? <button className="btn btn-primary full-width m2-top" onClick = {() => removeFromHistory(id,userDispatch)}>Remove From History</button> : null}
            </div>
        </div>
    )
}

export default VideoCard