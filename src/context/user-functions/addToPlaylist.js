import axios from "axios"



const addToPlaylist = (video,playlistId,userDispatch,setModalActive) => {

   const encodedToken = localStorage.getItem("userToken")

    axios
     .post(`/api/user/playlists/${playlistId}`,{video},{headers : {authorization: encodedToken}})
     .then(res => {
        //console.log(res.data)
        axios
         .get("/api/user/playlists",{headers : {authorization: encodedToken}})
         .then(res => {
            userDispatch({type : "PLAYLIST" , payload : res.data.playlists})
            setModalActive(false)
         })
         .catch(err => console.log(err))
     })
}

export default addToPlaylist