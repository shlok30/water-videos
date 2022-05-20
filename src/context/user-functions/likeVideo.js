import axios from "axios"

const likeVideo = (video,userDispatch) => {

    const encodedToken = localStorage.getItem("userToken")
    //console.log("Liked",video["_id"])

    axios
     .post("/api/user/likes",{video},{headers : {authorization : encodedToken}})
     .then((res) => userDispatch({type : "LIKE",payload : res.data.likes}))
     .catch(err => console.log(err))
}

export default likeVideo