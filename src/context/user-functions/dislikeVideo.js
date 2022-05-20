import axios from "axios"

const encodedToken = localStorage.getItem("userToken")

const dislikeVideo = (videoId,userDispatch) => {

    const encodedToken = localStorage.getItem("userToken")

    axios
     .delete(`/api/user/likes/${videoId}`,{headers : {authorization : encodedToken}})
     .then(res => userDispatch({type : "LIKE", payload : res.data.likes}))
     .catch(err => console.log(err))
}

export default dislikeVideo