import axios from "axios"

const encodedToken = localStorage.getItem("userToken")

const createPlaylist = (title,videoId) => {
    axios
     .post("/api/user/playlists",{playlist : {title}},{headers : {authorization: encodedToken}})
     .then(res => {
        console.log(res.data)
        if(videoId){
            console.log("Video also needs to be added")
        }
     })
     .catch(err => console.log(err))
}

export default createPlaylist