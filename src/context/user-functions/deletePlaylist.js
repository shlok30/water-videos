import axios from "axios"

const encodedToken = localStorage.getItem("userToken")

const deletePlaylist = (playlistId,userDispatch) => {
    axios
     .delete(`/api/user/playlists/${playlistId}`, {headers : {authorization: encodedToken}})
     .then(res => {
        userDispatch({type : "PLAYLIST", payload : res.data.playlists})
     })
     .catch(err => console.log(err))
}

export default deletePlaylist