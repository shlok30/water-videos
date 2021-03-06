import {createContext, useContext, useReducer} from 'react'
import userReducer from './reducers/user-reducer'
import addToWatchLater from './user-functions/addToWatchlater'
import removeFromWatchlater from './user-functions/removeFromWatchlater'
import likeVideo from './user-functions/likeVideo'
import dislikeVideo from './user-functions/dislikeVideo'
import createPlaylist from './user-functions/createPlaylist'
import removeFromPlaylist from './user-functions/removeFromPlaylist'
import deletePlaylist from './user-functions/deletePlaylist'
import addToHistory from './user-functions/addToHistory'
import removeFromHistory from './user-functions/removeFromHistory'
import deleteHistory from './user-functions/deleteHistory'

const UserContext = createContext()

const UserContextProvider = ({children}) => {

    const [userState , userDispatch] = useReducer(userReducer,{isLoggedIn : false , history : [] , likes : [] , playlists : [], watchlater : []})
    
    console.log("User State Changed",userState)

    return(
        <UserContext.Provider value = {{userState,userDispatch,addToWatchLater,removeFromWatchlater,likeVideo,dislikeVideo,createPlaylist,removeFromPlaylist,deletePlaylist,addToHistory,removeFromHistory,deleteHistory}}>
            {children}
        </UserContext.Provider>
    )
}

const useUser = () => useContext(UserContext)

export {UserContextProvider,useUser}