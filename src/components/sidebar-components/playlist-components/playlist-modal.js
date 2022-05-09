import { usePlaylist } from "../../../context/playlist-context"
import { useUser } from "../../../context/user-context"
import ModalElements from "./modal-elements"
import addVideoToPlaylist from "../../../context/user-functions/addVideoToPlaylist"

const PlaylistModal = (video) => {

    const {newPlaylistName, newPlaylistDescription,setNewPlaylistName,setNewPlaylistDescription,setPlaylistModalActive,selectedPlaylist} = usePlaylist()
    const {addPlaylist,userDispatch,userState : {playlists}} = useUser()

    const renderModalElements = (playlists) => playlists.length === selectedPlaylist.length  ? playlists.map(({title,_id}) => <ModalElements title = {title} key = {_id} _id = {_id} />) : null //To Tackle Async JS

    const handleClick = () => {
        if(newPlaylistName){
            addPlaylist({title : newPlaylistName , description : newPlaylistDescription},video,userDispatch,setPlaylistModalActive)
        }
        const playlistsToAddVideo = selectedPlaylist.filter((playlist) => playlist.selected === true)
        for(let playlist of playlists){ // Again because of Async we dont get the latest created PL
            addVideoToPlaylist(playlist["_id"],video)
        }
    }
    

    return(
        <div className = "half-width padding-m flex flex-column gap-m  light-shadow" style = {{zIndex : "1", position: "absolute" , top : "35%", backgroundColor: "white"}}>
	        <h3 className = "primary-text-colour">Choose Existing Playlist</h3>
            {renderModalElements(playlists)}
            <hr />
            <h3 className = "primary-text-colour">Create New Playlist</h3>
            <input type = "text" className = "input-field" placeholder="Please Enter New Playlist Name" value = {newPlaylistName} onChange = {(e) => setNewPlaylistName(e.target.value)} />
            <input type = "text" className = "input-field" placeholder="Please Enter New Playlist Description" value = {newPlaylistDescription} onChange = {(e) => setNewPlaylistDescription(e.target.value)} />
            <div className = "flex gap-m justify-right">
                <button className="btn btn-primary" onClick = {handleClick}>Create New Playlist</button>
    	        <button className="btn btn-primary">Save to Playlist</button>
            </div>
        </div>
    )
}

export default PlaylistModal