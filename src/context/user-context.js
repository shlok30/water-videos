import {createContext, useContext, useReducer} from 'react'
import userReducer from './reducers/user-reducer'
import addToWatchLater from './user-functions/addToWatchlater'

const UserContext = createContext()

const UserContextProvider = ({children}) => {

    const [userState , userDispatch] = useReducer(userReducer,{isLoggedIn : false , history : [] , likes : [] , playlists : [], watchlater : []})
    
    console.log("User State Changed",userState)

    return(
        <UserContext.Provider value = {{userState,userDispatch,addToWatchLater}}>
            {children}
        </UserContext.Provider>
    )
}

const useUser = () => useContext(UserContext)

export {UserContextProvider,useUser}