import {createContext, useContext, useState, useEffect} from "react"
import { useUser } from "./user-context"

const PlaylistContext = createContext()

const PlaylistContextProvider = ({children}) => {

    const [newPlaylistName,setNewPlaylistName] = useState("")
    const [newPlaylistDescription, setNewPlaylistDescription] = useState("")
    const [playlistModalActive,setPlaylistModalActive] = useState(false)
    const [selectedPlaylist,setSelectedPlaylist] = useState([])

    const {userState : {playlists}} = useUser()

    const playlistReducer = (acc,curr) => [...acc,{id : curr["_id"] ,selected : true}] 

    useEffect(() => setSelectedPlaylist(playlists.reduce(playlistReducer,[])),[playlists])

    console.log("playlist states",selectedPlaylist)

    return(
        <PlaylistContext.Provider value ={{newPlaylistName, newPlaylistDescription, playlistModalActive, selectedPlaylist , setNewPlaylistDescription , setNewPlaylistName, setPlaylistModalActive , setSelectedPlaylist}}>
            {children}
        </PlaylistContext.Provider>
    )
}

const usePlaylist = () => useContext(PlaylistContext)

export {usePlaylist,PlaylistContextProvider}