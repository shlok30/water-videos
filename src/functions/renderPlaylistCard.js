import PlaylistCard from "../components/playlist-card";

const renderPlaylistCards = (playlists,setModalActive) => playlists.map(({title,_id,videos}) => <PlaylistCard title = {title} key = {_id} numberOfVideos = {videos.length} videos = {videos} id = {_id} setModalActive = {setModalActive}/>)

export default renderPlaylistCards