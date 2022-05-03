import {createContext , useContext, useState} from 'react'
import authFunction from './auth-functions/authFunction'

const AuthContext = createContext()

const AuthContextProvider = ({children}) => {

    const [email , setEmail] = useState("")
    const [password, setPassword] = useState("")

    console.log("Email State",email)
    console.log("Password State",password)

    return(
        <AuthContext.Provider value ={{setEmail,setPassword,authFunction,email,password}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext)

export {AuthContextProvider,useAuth}