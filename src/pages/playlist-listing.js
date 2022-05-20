import Sidebar from "../components/sidebar"
import PlaylistCard from "../components/playlist-card"
import { useState } from "react"
import PlaylistModal from "../components/playlist-modal"
import { useParams } from "react-router-dom"
import renderPlaylistCards from "../functions/renderPlaylistCard"
import { useUser } from "../context/user-context"

const PlaylistListing = () => {

    const [modalActive,setModalActive] = useState(false)

    const {videoId} = useParams()

    const {userState : {playlists}} = useUser()

    return(
        <>
            <div className="flex">
                <div>
                    <Sidebar />
                </div>
                <div className="container center-block grow-1">
                    <h2 className = "h-l m5-top">Playlists</h2>
                    <button className = "btn btn-error m2-top" onClick = {() => setModalActive(true)}>Create Playlist</button>
                    {modalActive ? <PlaylistModal setModalActive = {setModalActive} videoId = {videoId}  /> : ""}
                    <div className="flex space-around m3-top gap-m">
                        {renderPlaylistCards(playlists,setModalActive)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlaylistListing