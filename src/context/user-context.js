import {createContext, useContext, useReducer} from 'react'
import userReducer from './reducers/user-reducer'

const UserContext = createContext()

const UserContextProvider = ({children}) => {

    const [userState , userDispatch] = useReducer(userReducer,{isLoggedIn : false , history : [] , likes : [] , playlists : [], watchlater : []})
    
    console.log("User State",userState)

    return(
        <UserContext.Provider value = {{userState,userDispatch}}>
            {children}
        </UserContext.Provider>
    )
}

const useUser = () => useContext(UserContext)

export {UserContextProvider,useUser}