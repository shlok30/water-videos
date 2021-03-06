import {useState} from 'react'
import { useUser } from '../context/user-context'

const PlaylistModal = ({setModalActive,videoId}) => {

    const [newPlaylistName,setNewPlaylistName] = useState("")

    const {createPlaylist,userDispatch} = useUser()

    return(
        <div className = "half-width padding-m flex flex-column gap-m  light-shadow" style = {{zIndex : "1", position: "absolute" , top : "35%", backgroundColor: "white"}}>
            <h3 className = "primary-text-colour">Create New Playlist</h3>
            <input type = "text" className = "input-field" placeholder="Please Enter New Playlist Name" value = {newPlaylistName} onChange = {(e) => setNewPlaylistName(e.target.value)} />
            <div className = "flex gap-m justify-right">
                <button className="btn btn-primary" onClick = {() => createPlaylist(newPlaylistName,videoId,userDispatch,setModalActive) }>Create New Playlist</button>
            </div>
        </div>
    )
}

export default PlaylistModal