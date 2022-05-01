import { useLocation } from 'react-router-dom';

const Nav = () => {

    const location = useLocation()

    console.log(location.pathname)

    return(
        <nav className = {`navigation flex gap-xl align-center full-width ${location.pathname === '/login' || location.pathname === '/signup' ? 'display-none' : ''}`}>
 	        <div className="nav-brand">Water-Videos</div>
 	        <div className = "input-wrapper flex grow-1 flex-center" >
    	        <input className = "input-field" placeholder="Please Enter Text" />
            </div>
            <div className = "flex gap-xl flex-center grow-1" >
    	        <button className="btn btn-secondary">Login</button>
            </div>
        </nav>
    )
}

export default Nav