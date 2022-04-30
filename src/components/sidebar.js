import SidebarElements from "./sidebar-components/sidebar-elements"

const Sidebar = () => {
    return(
        <div className='m5-top'>
            <SidebarElements text = "homepage" icon = "home"/>
            <SidebarElements text = "listing page" icon = "trending_up"/>
            <SidebarElements text = "liked" icon = "favorite"/>
            <SidebarElements text = "watch later" icon = "schedule"/>
            <SidebarElements text = "history" icon = "history"/>
            <SidebarElements text = "playlist" icon = "playlist_play"/>
        </div>
    )
}

export default Sidebar