import { useEffect } from "react"
import { usePlaylist } from "../../../context/playlist-context"
import { useUser } from "../../../context/user-context"
import ModalElements from "./modal-elements"

const PlaylistModal = (video) => {

    const {newPlaylistName, newPlaylistDescription,setNewPlaylistName,setNewPlaylistDescription,setPlaylistModalActive,setSelectedPlaylist} = usePlaylist()
    const {addPlaylist,userDispatch,userState : {playlists}} = useUser()

    const renderModalElements = (playlists) => playlists.map(({title,_id}) => <ModalElements title = {title} key = {_id} _id = {_id} />)

    useEffect(() => {
        console.log("Component was mounted")
        const playlistReducer = (acc,curr) => [...acc,{id : curr["_id"] ,selected : true}] // Ask if this works ?
        setSelectedPlaylist(playlists.reduce(playlistReducer,[]))
    },[])
    

    return(
        <div class = "half-width padding-m flex flex-column gap-m  light-shadow" style = {{zIndex : "1", position: "absolute" , top : "35%", backgroundColor: "white"}}>
	        <h3 class = "primary-text-colour">Choose Existing Playlist</h3>
            {renderModalElements(playlists)}
            <hr />
            <h3 class = "primary-text-colour">Create New Playlist</h3>
            <input type = "text" class = "input-field" placeholder="Please Enter New Playlist Name" value = {newPlaylistName} onChange = {(e) => setNewPlaylistName(e.target.value)} />
            <input type = "text" class = "input-field" placeholder="Please Enter New Playlist Description" value = {newPlaylistDescription} onChange = {(e) => setNewPlaylistDescription(e.target.value)} />
            <div class = "flex gap-m justify-right">
                <button class="btn btn-primary" onClick = {() => addPlaylist({title : newPlaylistName , description : newPlaylistDescription},video,userDispatch,setPlaylistModalActive)}>Create New Playlist</button>
    	        <button class="btn btn-primary">Save to Playlist</button>
            </div>
        </div>
    )
}

export default PlaylistModal