import axios from 'axios'

const authFunction = (email,password,userDispatch,navigate,action,from,setAuthError) => {

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
         
         from ? navigate(from) : navigate("/")
     })
     .catch(err => {

         console.log(err.response.data.errors)
         setAuthError(err.response.data.errors[0])
         setTimeout(() => setAuthError(""),1200)

     })
}

export default authFunction