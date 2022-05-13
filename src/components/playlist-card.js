import { useParams } from "react-router-dom"

const PlaylistCard = ({title,numberOfVideos,videos}) => {

    const {videoId} = useParams()

    const isVideoAlreadyInPlaylist = videos.find((video) => video["_id"] === videoId)

    return(
        <div class="card-container flex flex-column text-card gap-m">
	        <div class="card-header">
    	        <h4>{title}</h4>
            </div>
            <div class="card-body">
                <p class="card-subtext">{numberOfVideos} Videos</p>
            </div>
            <div class="card-footer">
                <button className="btn btn-error full-width">{isVideoAlreadyInPlaylist ? "Remove from Playlist" : "Add to Playlist"}</button>
            </div>
        </div>
    )
}

export default PlaylistCard