
const SidebarElements = ({text,icon}) => {
    return(
        <div class = "flex gap-xl padding-m cursor-pointer drawer-wrapper">
    	    <i class="material-icons cursor-pointer primary-text-colour" >{icon}</i>
            <p style = {{textTransform:"capitalize"}}>{text}</p>
        </div>
    )
}
    

export default SidebarElements