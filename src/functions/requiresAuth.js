import { Navigate, useLocation } from "react-router-dom"
import { useUser } from "../context/user-context"

const RequiresAuth = ({children}) => {

    const {userState : {isLoggedIn}} = useUser()

    console.log("Checking islogged in from require auth",isLoggedIn)

    const location = useLocation()

    return isLoggedIn ? children : <Navigate to = "/login" replace state = {{from : location.pathname}} /> 
}

export default RequiresAuth