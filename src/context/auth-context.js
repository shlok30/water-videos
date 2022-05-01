import {createContext , useContext, useState} from 'react'
import signupFunction from './auth-functions/singupFunction'

const AuthContext = createContext()

const AuthContextProvider = ({children}) => {

    const [email , setEmail] = useState("")
    const [password, setPassword] = useState("")

    console.log("Email State",email)
    console.log("Password State",password)

    return(
        <AuthContext.Provider value ={{setEmail,setPassword,signupFunction,email,password}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext)

export {AuthContextProvider,useAuth}