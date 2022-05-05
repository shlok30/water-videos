import axios from "axios"

const encodedToken = localStorage.getItem("userToken")

console.log("This is encodedTOkn",encodedToken)

const removeFromWatchlater = (videoId,userDispatch) => {
    
    axios
     .delete(`/api/user/watchlater/${videoId}`,{headers : {authorization : encodedToken}})
     .then((res) => {
         userDispatch({type : "WATCH_LATER",payload : res.data.watchlater})
     })
     .catch(err => console.log(err))
}

export default removeFromWatchlater