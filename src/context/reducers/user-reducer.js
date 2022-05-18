
const userReducer = (state,{type,payload}) => {
    switch(type){
        case "LOGIN":
            console.log("Login was used")
            return {...state,isLoggedIn : true ,likes : [...payload.likes] , history : [...payload.history] , likes : [...payload.likes] , watchlater : [...payload.watchlater] , playlists: [...payload.playlists] }
        case "SIGNUP":
            console.log("Signup was used")
            return {...state,isLoggedIn : true}
        case "LIKE":
            return {...state, likes : [...payload]}
        case "HISTORY":
            return {...state, history : [...payload]}
        case "WATCH_LATER":
            return {...state, watchlater : [...payload]}
        case "PLAYLIST":
            return {...state, playlists : [...payload]}
        default:
            return
    }
}

export default userReducer