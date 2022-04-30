import { NavLink } from "react-router-dom"

const SidebarElements = ({text,icon,link}) => {
    return(
        <div class = "flex gap-xl padding-m cursor-pointer drawer-wrapper">
    	    <i class="material-icons cursor-pointer primary-text-colour" >{icon}</i>
            <NavLink to = {link ? link : '/random'} className = "primary-colour" style = {({isActive}) => ({textTransform : "capitalize" , color : isActive ? "red" : ""})}>{text}</NavLink>
        </div>
    )
}
    

export default SidebarElements