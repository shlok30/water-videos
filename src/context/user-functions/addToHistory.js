import axios from "axios"

const encodedToken = localStorage.getItem("userToken")

const addToHistory = (video,userDispatch) => {
    axios
     .post("/api/user/history",{video},{headers : {authorization : encodedToken}})
     .then(res => userDispatch({type : "HISTORY" , payload : res.data.history}))
     .catch(err => console.log(err))
}

export default addToHistory