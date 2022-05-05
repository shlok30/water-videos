import { Link, useLocation } from "react-router-dom"
import { useUser } from "../context/user-context"

const VideoCard = ({width,id,title,creator,views}) => {

    const location = useLocation()
    
    const {removeFromWatchlater,userDispatch} = useUser()

    return(
        <div className={`card-container flex flex-column gap-m ${width}`}>
            <div class="img-container badge">
            <img src="https://images.unsplash.com/photo-1643313947128-849e4da4fd5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2142&q=80"/>
            <span class="badge-icon">New</span>
            </div>

            <div class="card-header">
                <h4>{title}</h4>
                <p class="card-subtitle m1">{creator}</p>
            </div>
            
            <div class="card-body">
                <p class="card-subtext">{views} Views | 6 Hours Ago</p>
            </div>

            <div class="card-footer">
                <Link to = {`/video/${id}`}><button class="btn btn-error full-width">Watch Now</button></Link>
                {location.pathname === "/watch-later" ? <button className="btn btn-primary full-width m2-top" onClick={() => removeFromWatchlater(id,userDispatch)}>Remove From Watchlater</button> : null}
            </div>
        </div>
    )
}

export default VideoCard