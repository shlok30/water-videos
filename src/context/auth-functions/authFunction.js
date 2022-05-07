import axios from 'axios'

const authFunction = (email,password,userDispatch,navigate,action) => {

    axios
     .post(`/api/auth/${action}`,{email,password})
     .then(res => {
         console.log(res.data)
         localStorage.setItem("userToken",res.data.encodedToken)
         if(action === "login"){
            userDispatch({type : "LOGIN" , payload : res.data.foundUser})
         }
         else{
            userDispatch({type : "SIGNUP"}) 
         }
         
         navigate("/")
     })
     .catch(err => console.log(err))
}

export default authFunction