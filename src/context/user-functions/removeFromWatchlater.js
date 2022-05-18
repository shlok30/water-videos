import axios from "axios"

const removeFromWatchlater = (videoId,userDispatch) => {

    const encodedToken = localStorage.getItem("userToken")
    
    axios
     .delete(`/api/user/watchlater/${videoId}`,{headers : {authorization : encodedToken}})
     .then((res) => {
         userDispatch({type : "WATCH_LATER",payload : res.data.watchlater})
     })
     .catch(err => console.log(err))
}

export default removeFromWatchlater