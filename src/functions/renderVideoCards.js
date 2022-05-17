import VideoCard from "../components/video-card"

const renderVideoCards = (videoLibrary,width) => videoLibrary.map(({_id,title,creator,views}) => <VideoCard key = {_id} id = {_id} title = {title} creator = {creator} views = {views} width = {width} />)

export default renderVideoCards