import axios from "axios"

const encodedToken = localStorage.getItem("userToken")

const likeVideo = (video,userDispatch) => {
    console.log("Liked",video["_id"])
    axios
     .post("/api/user/likes",{video},{headers : {authorization : encodedToken}})
     .then((res) => userDispatch({type : "LIKE",payload : res.data.likes}))
     .catch(err => console.log(err))
}

export default likeVideo