import { useUser } from "../context/user-context"
import SidebarElements from "./sidebar-components/sidebar-elements"

const Sidebar = () => {

    const {userState} = useUser()

    return(
        <div className='m5-top'>
            <SidebarElements text = "homepage" icon = "home" link = "/"/>
            <SidebarElements text = "trending page" icon = "trending_up" link = "/trending"/>
            <SidebarElements text = "liked" icon = "favorite" link = "/liked-videos" sumOfElements={userState.likes.length}/>
            <SidebarElements text = "watch later" icon = "schedule" link = "/watch-later" sumOfElements = {userState.watchlater.length}/>
            <SidebarElements text = "history" icon = "history"/>
            <SidebarElements text = "playlist" icon = "playlist_play"/>
        </div>
    )
}

export default Sidebar