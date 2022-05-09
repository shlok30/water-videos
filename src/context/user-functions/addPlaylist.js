import axios from "axios"

const encodedToken = localStorage.getItem("userToken")

const addPlaylist = (playlist,video,userDispatch,setPlaylistModalActive) => {
    axios
     .post("/api/user/playlists",{playlist},{headers : {authorization : encodedToken}})
     .then(res => {
         console.log(res.data.playlists)
         if(video){
            const lengthofPlaylistArray = res.data.playlists.length
            console.log("Length of playlist array",lengthofPlaylistArray)
            const idOfNewPlaylist = res.data.playlists[lengthofPlaylistArray - 1]["_id"]
            console.log("Id of new playlist",idOfNewPlaylist)
            axios
             .post(`/api/user/playlists/${idOfNewPlaylist}`,{video},{headers : {authorization : encodedToken}})
             .then(res => {
                 console.log(res.data)
                 axios
                  .get("/api/user/playlists",{headers : {authorization : encodedToken}})
                  .then(res => {
                    userDispatch({type : "PLAYLIST", payload : res.data.playlists})
                    setPlaylistModalActive((prev) => !prev)
                  })
                  .catch(err => console.log(err))
             })
             .catch(err => console.log(err))
         }
         


     })
     .catch(err => console.log(err))
}

export default addPlaylist