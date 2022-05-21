import axios from "axios"

const addToHistory = (video,userDispatch) => {
    const encodedToken = localStorage.getItem("userToken")
    axios
     .post("/api/user/history",{video},{headers : {authorization : encodedToken}})
     .then(res => userDispatch({type : "HISTORY" , payload : res.data.history}))
     .catch(err => console.log(err))
}

export default addToHistory