import Sidebar from "../components/sidebar"
import PlaylistCard from "../components/playlist-card"
import { useState } from "react"
import PlaylistModal from "../components/playlist-modal"
import { useParams } from "react-router-dom"

const PlaylistListing = () => {

    const [modalActive,setModalActive] = useState(false)

    const {videoId} = useParams()

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
                    <div className="flex space-between m3-top gap-m">
                        <PlaylistCard />
                        <PlaylistCard />
                        <PlaylistCard />
                        <PlaylistCard />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlaylistListing