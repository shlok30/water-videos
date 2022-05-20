import axios from "axios"
import { videos } from "../../backend/db/videos"
import addToPlaylist from "./addToPlaylist"

const createPlaylist = (title,videoId,userDispatch,setModalActive) => {

    const encodedToken = localStorage.getItem("userToken")

    axios
     .post("/api/user/playlists",{playlist : {title}},{headers : {authorization: encodedToken}})
     .then(res => {
        console.log(res.data)
        if(videoId){  //This is checking if we want to immediately add video to newly created playlist
            const idOfLatestPlaylist = res.data.playlists[res.data.playlists.length - 1]["_id"]
            const video = videos.find((video) => video["_id"] === videoId)
            addToPlaylist(video,idOfLatestPlaylist,userDispatch,setModalActive)
        }
        else{
            userDispatch({type : "PLAYLIST",payload : res.data.playlists})
            setModalActive(false)
            
        }
     })
     .catch(err => console.log(err))
}

export default createPlaylist