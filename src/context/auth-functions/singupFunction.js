import axios from 'axios'
import { useUser } from '../user-context'

const signupFunction = (email,password,userDispatch) => {

    axios
     .post("/api/auth/signup",{email,password})
     .then(res => {
         console.log(res.data)
         localStorage.setItem("userToken",res.data.encodedToken)
         userDispatch({type : "LOGIN"})

     })
     .catch(err => console.log(err))
}

export default signupFunction