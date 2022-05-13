import PlaylistCard from "../components/playlist-card";

const renderPlaylistCards = (playlists) => playlists.map(({title,_id,videos}) => <PlaylistCard title = {title} key = {_id} numberOfVideos = {videos.length} videos = {videos} />)

export default renderPlaylistCards