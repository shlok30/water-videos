
const userReducer = (state,{type,payload}) => {
    switch(type){
        case "LOGIN":
            return {...state,isLoggedIn : true ,likes : [...payload.likes] , history : [...payload.history] , watchlater : [...payload.watchlater] , playlists: [...payload.playlists] }
        case "SIGNUP":
            return {...state,isLoggedIn : true}
        case "LOGOUT":
            localStorage.clear()
            return {...state,isLoggedIn : false, likes :[], history : [], watchlater : [], playlists : []}
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