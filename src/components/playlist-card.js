
const PlaylistCard = () => {
    return(
        <div class="card-container flex flex-column text-card gap-m">
	        <div class="card-header">
    	        <h4>Random Name</h4>
            </div>
            <div class="card-body">
                <p class="card-subtext">10 Videos</p>
            </div>
            <div class="card-footer">
                <button className="btn btn-error full-width">Delete Playlist</button>
            </div>
        </div>
    )
}

export default PlaylistCard