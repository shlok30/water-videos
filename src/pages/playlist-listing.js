import Sidebar from "../components/sidebar"
import PlaylistCard from "../components/playlist-card"

const PlaylistListing = () => {
    return(
        <>
            <div className="flex">
                <div>
                    <Sidebar />
                </div>
                <div className="container center-block grow-1">
                    <h2 className = "h-l m5-top">Playlists</h2>
                    <button className = "btn btn-error m2-top">Create Playlist</button>
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