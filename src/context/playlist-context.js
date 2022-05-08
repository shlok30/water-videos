import {createContext, useContext, useState} from "react"
import { useUser } from "./user-context"

const PlaylistContext = createContext()

const PlaylistContextProvider = ({children}) => {

    const {userState : {playlists}} = useUser()

    console.log("Playlist from pc",playlists)

    const [newPlaylistName,setNewPlaylistName] = useState("")
    const [newPlaylistDescription, setNewPlaylistDescription] = useState("")
    const [playlistModalActive,setPlaylistModalActive] = useState(false)

    console.log("playlist states",newPlaylistName,newPlaylistDescription)

    return(
        <PlaylistContext.Provider value ={{playlists, newPlaylistName, newPlaylistDescription, playlistModalActive, setNewPlaylistDescription , setNewPlaylistName, setPlaylistModalActive}}>
            {children}
        </PlaylistContext.Provider>
    )
}

const usePlaylist = () => useContext(PlaylistContext)

export {usePlaylist,PlaylistContextProvider}