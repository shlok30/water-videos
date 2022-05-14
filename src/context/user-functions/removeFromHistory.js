import axios from "axios";

const encodedToken = localStorage.getItem("userToken")

const removeFromHistory = (videoId,userDispatch) => {
    axios
     .delete(`/api/user/history/${videoId}`,{headers : {authorization : encodedToken}})
     .then(res => userDispatch({type : "HISTORY" , payload : res.data.history}))
     .catch(err => console.log(err))
}

export default removeFromHistory