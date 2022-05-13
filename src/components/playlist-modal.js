import {useState} from 'react'

const PlaylistModal = () => {

    const [newPlaylistName,setNewPlaylistName] = useState("")

    return(
        <div className = "half-width padding-m flex flex-column gap-m  light-shadow" style = {{zIndex : "1", position: "absolute" , top : "35%", backgroundColor: "white"}}>
            <h3 className = "primary-text-colour">Create New Playlist</h3>
            <input type = "text" className = "input-field" placeholder="Please Enter New Playlist Name" value = {newPlaylistName} onChange = {(e) => setNewPlaylistName(e.target.value)} />
            <div className = "flex gap-m justify-right">
                <button className="btn btn-primary">Create New Playlist</button>
            </div>
        </div>
    )
}

export default PlaylistModal