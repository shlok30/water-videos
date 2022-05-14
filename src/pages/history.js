import VideoCard from "../components/video-card"
import Sidebar from "../components/sidebar"
import { useUser } from "../context/user-context"
import renderVideoCards from "../functions/renderVideoCards"

const HistoryPage = () => {

    const {userState : {history}} = useUser()

    const reverseOfHistory = [...history].reverse()

    return(
        <>
            <div className="flex">
                <div className="grow-1">
                    <Sidebar />
                </div>
                <div className="container center-block">
                    <div className="flex space-between m5-top">
                        <h2 className = "h-l">History</h2>
                        <button className="btn btn-error">Delete History</button>
                    </div>
                    <div className="flex gap-m space-between m3-top self-start">
                        {renderVideoCards(reverseOfHistory)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default HistoryPage