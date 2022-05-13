import axios from "axios"

const encodedToken = localStorage.getItem("userToken")

const removeFromPlaylist = (playlistId,videoId,userDispatch) => {
    //console.log("Video Id is ",videoId , "Playlist Id is ",playlistId)
    axios
     .delete(`/api/user/playlists/${playlistId}/${videoId}`, {headers : {authorization: encodedToken}})
     .then(res => {
         console.log(res.data)
         axios
          .get("/api/user/playlists",{headers : {authorization: encodedToken}})
          .then(res => userDispatch({type : "PLAYLIST" , payload : res.data.playlists}))
     })
     .catch(err => console.log(err))
}

export default removeFromPlaylist