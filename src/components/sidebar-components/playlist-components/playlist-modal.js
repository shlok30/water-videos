import ModalElements from "./modal-elements"

const PlaylistModal = () => {
    return(
        <div class = "half-width padding-m flex flex-column gap-m  light-shadow">
	        <h3 class = "primary-text-colour">Choose Existing Playlist</h3>
            <ModalElements />
            <ModalElements />
            <ModalElements />
            <ModalElements />
            <hr />
            <h3 class = "primary-text-colour">Create New Playlist</h3>
            <input type = "text" class = "input-field" placeholder="Please Enter New Playlist Name" />
            <div class = "flex gap-m justify-right">
    	        <button class="btn btn-primary">Save to Playlist</button>
            </div>
        </div>
    )
}

export default PlaylistModal