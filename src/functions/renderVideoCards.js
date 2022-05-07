import VideoCard from "../components/video-card"

const renderVideoCards = (videoLibrary,width) => videoLibrary.map(({_id,title,creator,views,id}) => <VideoCard key = {_id} id = {_id ? _id : id} title = {title} creator = {creator} views = {views} width = {width} />)

export default renderVideoCards