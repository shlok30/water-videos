import axios from 'axios'

const signupFunction = (email,password) => {
    console.log({email,password})
    axios
     .post("/api/auth/signup",{email,password})
     .then(res => console.log(res))
     .catch(err => console.log(err))
}

export default signupFunction