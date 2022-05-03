import { useLocation, useNavigate } from 'react-router-dom';
import { useUser } from '../context/user-context';

const Nav = () => {

    const location = useLocation()

    const {userState} = useUser()

    const navigate = useNavigate()

    return(
        <nav className = {`navigation flex gap-xl align-center full-width ${location.pathname === '/login' || location.pathname === '/signup' ? 'display-none' : ''}`}>
 	        <div className="nav-brand">Water-Videos</div>
 	        <div className = "input-wrapper flex grow-1 flex-center" >
    	        <input className = "input-field" placeholder="Please Enter Text" />
            </div>
            <div className = "flex gap-xl flex-center grow-1" >
    	        <button className="btn btn-secondary" onClick = {() => navigate("/login")}>{userState.isLoggedIn ? "Logout" : "Login"}</button>
            </div>
        </nav>
    )
}

export default Nav