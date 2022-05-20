import Sidebar from "../components/sidebar"
import { useUser } from "../context/user-context"
import renderVideoCards from "../functions/renderVideoCards"

const WatchLaterPage = () => {

    const {userState : {watchlater}} = useUser()
    
    return(
        <>
            <div className="flex">
                <div className={watchlater.length > 0 ?"grow-1" : ""}>
                    <Sidebar />
                </div>
                <div className="container center-block">
                    {
                        watchlater.length === 0 ? <p className=" m3-top text-l error-colour-text">No Videos</p> 
                        :
                        <>
                            <h2 className = "h-l m5-top">Watch Later</h2>
                            <div className="flex gap-m m3-top self-start">
                                {renderVideoCards(watchlater)}
                            </div>
                        </>
                    }
                    
                </div>
            </div>
        </>
    )
}

export default WatchLaterPage