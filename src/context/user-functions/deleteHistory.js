import axios from "axios"

const deleteHistory = (userDispatch) => {
    const encodedToken = localStorage.getItem("userToken")
    axios
     .delete("/api/user/history/all",{headers : {authorization: encodedToken}})
     .then(res => userDispatch({type : "HISTORY" , payload : res.data.history}))
     .catch(err => console.log(err))
}

export default deleteHistory