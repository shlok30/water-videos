import { useLocation } from "react-router-dom"
import { useUser } from "../context/user-context"

const Footer = () => {

    const {userState : {likes,watchlater}} = useUser()

    const location = useLocation()

    //console.log("Path from footer",watchlater)

    return(
        <footer className={`footer m6-top ${location.pathname === '/login' || location.pathname === '/signup' ? "display-none" : ""} ${(location.pathname === "/liked-videos" && likes.length === 0)  || (location.pathname === "/watch-later" && watchlater.length === 0) ? "fixed bottom-0 full-width" : "" }`}>
            Made by Shlok
        </footer>
    )
}

export default Footer