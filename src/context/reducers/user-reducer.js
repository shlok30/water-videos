
const userReducer = (state,{type,action}) => {
    switch(type){
        case "LOGIN":
            return {...state,isLoggedIn : !state.isLoggedIn}
        case "LIKE":
            return {...state, likes : [...action]}
        case "HISTORY":
            return {...state, history : [...action]}
        case "WATCH_LATER":
            return {...state, watchlater : [...action]}
        case "PLAYLIST":
            return {...state, playlists : [...action]}
        default:
            return
    }
}

export default userReducer