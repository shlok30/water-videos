import axios from 'axios'

const encodedToken = localStorage.getItem("userToken")

const addToWatchLater = (video,userDispatch) => {
    //console.log("add to watch later and encoded token",encodedToken)
    axios
     .post("/api/user/watchlater",{video},{headers : {authorization : encodedToken}})
     .then((res) => {
         console.log(res.data.watchlater)
         userDispatch({type : "WATCH_LATER",payload : res.data.watchlater})
     })
     .catch(err => console.log(err))
}

export default addToWatchLater