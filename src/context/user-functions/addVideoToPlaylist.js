import axios from "axios"

const encodedToken = localStorage.getItem("userToken")

const addVideoToPlaylist = (id,video) => {
    axios
     .post(`/api/user/playlists/${id}`,{video}, {headers : {authorization : encodedToken}})
     .then(res => console.log(res.data))
     .catch(err => console.log(err))
}

export default addVideoToPlaylist