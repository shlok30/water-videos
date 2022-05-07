import { NavLink } from "react-router-dom"

const SidebarElements = ({text,icon,link,sumOfElements}) => {
    return(
        <div class = "flex gap-xl padding-m cursor-pointer drawer-wrapper">
    	    <i class="material-icons cursor-pointer primary-text-colour" >{icon}</i>
            <NavLink to = {link ? link : '/random'} className = "primary-colour" style = {({isActive}) => ({textTransform : "capitalize" , color : isActive ? "red" : ""})}>{text} {(text === "watch later" || text === "liked") && sumOfElements ? <span className="m2-left number">{sumOfElements}</span> : null}</NavLink>
        </div>
    )
}
    

export default SidebarElements