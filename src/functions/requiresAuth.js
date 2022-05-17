import { Navigate } from "react-router-dom"
import { useUser } from "../context/user-context"

const RequiresAuth = ({children}) => {

    const {isLoggedIn} = useUser()

    return isLoggedIn ? children : <Navigate to = "/login" replace /> 
}

export default RequiresAuth