import Sidebar from "../components/sidebar"
import { useParams,useNavigate } from "react-router-dom"
import { useUser } from "../context/user-context"
import renderVideoCards from "../functions/renderVideoCards"


const PlaylistPage = () => {

    const {playlistId} = useParams()

    const {userState : {playlists},userDispatch,deletePlaylist} = useUser()

    const {title,videos} = playlists.find((playlist) => playlist["_id"] === playlistId)

    const navigate = useNavigate()

    const handleClick = () => {
        deletePlaylist(playlistId,userDispatch)
        navigate(-1)
    }

    return(
        <>
            <div className="flex">
                    <div className="grow-1">
                        <Sidebar />
                    </div>
                    <div className="container center-block">
                        <div className="flex space-between m5-top">
                            <h2 className = "h-l">{title}</h2>
                            <button className="btn btn-error" onClick = {handleClick}>Delete Playlist</button>
                        </div>
                        <div className="flex gap-m space-between m3-top">
                            {renderVideoCards(videos)}
                        </div>
                    </div>
                </div>
        </>
    )
}

export default PlaylistPage