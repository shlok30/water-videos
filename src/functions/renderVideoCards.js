import VideoCard from "../components/video-card"

const renderVideoCards = (videoLibrary) => videoLibrary.map(({_id,title,creator,views}) => <VideoCard key = {_id} id = {_id} title = {title} creator = {creator} views = {views} />)

export default renderVideoCards