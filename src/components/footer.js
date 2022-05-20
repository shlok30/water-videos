import { useLocation } from "react-router-dom"
import { useUser } from "../context/user-context"

const Footer = () => {

    const {userState : {likes,watchlater,playlists}} = useUser()

    const location = useLocation()

    const absolutePath = location.pathname.split("/")

    return(
        <footer className={`footer m6-top ${location.pathname === '/login' || location.pathname === '/signup' || absolutePath[1] === "playlist" || location.pathname === "/history" ? "display-none" : ""} ${(location.pathname === "/liked-videos" && likes.length === 0)  || (location.pathname === "/watch-later" && watchlater.length === 0) || (absolutePath[1] === "playlists" && playlists.length < 4 ) ? "fixed bottom-0 full-width" : "" }`}>
            Made by Shlok
        </footer>
    )
}

export default Footer