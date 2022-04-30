
const Nav = () => {
    return(
        <nav className = "navigation flex gap-xl align-center full-width">
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