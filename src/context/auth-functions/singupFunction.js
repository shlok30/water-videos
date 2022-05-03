import axios from 'axios'

const signupFunction = (email,password,userDispatch,navigate) => {

    axios
     .post("/api/auth/signup",{email,password})
     .then(res => {
         console.log(res.data)
         localStorage.setItem("userToken",res.data.encodedToken)
         userDispatch({type : "LOGIN"})
         navigate("/")
     })
     .catch(err => console.log(err))
}

export default signupFunction