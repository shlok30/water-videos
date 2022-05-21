import {createContext , useContext, useState} from 'react'
import authFunction from './auth-functions/authFunction'

const AuthContext = createContext()

const AuthContextProvider = ({children}) => {

    const [email , setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [authError,setAuthError] = useState("")

    return(
        <AuthContext.Provider value ={{setEmail,setPassword,authFunction,email,password,authError,setAuthError}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext)

export {AuthContextProvider,useAuth}