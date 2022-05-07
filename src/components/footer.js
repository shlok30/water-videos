import { useLocation } from "react-router-dom"

const Footer = () => {

    const location = useLocation()

    return(
        <footer className={`footer m6-top ${location.pathname === '/login' || location.pathname === '/signup' ? "display-none" : ""}`}>
            Made by Shlok
        </footer>
    )
}

export default Footer