import {createContext, useContext, useReducer} from 'react'
import userReducer from './reducers/user-reducer'
import addToWatchLater from './user-functions/addToWatchlater'
import removeFromWatchlater from './user-functions/removeFromWatchlater'
import likeVideo from './user-functions/likeVideo'
import dislikeVideo from './user-functions/dislikeVideo'

const UserContext = createContext()

const UserContextProvider = ({children}) => {

    const [userState , userDispatch] = useReducer(userReducer,{isLoggedIn : false , history : [] , likes : [] , playlists : [], watchlater : []})
    
    console.log("User State Changed",userState)

    return(
        <UserContext.Provider value = {{userState,userDispatch,addToWatchLater,removeFromWatchlater,likeVideo,dislikeVideo}}>
            {children}
        </UserContext.Provider>
    )
}

const useUser = () => useContext(UserContext)

export {UserContextProvider,useUser}