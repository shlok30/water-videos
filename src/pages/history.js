import VideoCard from "../components/video-card"
import Sidebar from "../components/sidebar"
import { useUser } from "../context/user-context"
import renderVideoCards from "../functions/renderVideoCards"

const HistoryPage = () => {

    const {userState : {history},userDispatch,deleteHistory} = useUser()

    const reverseOfHistory = [...history].reverse() // To get the latest video added to the list as the first element

    return(
        <>
            <div className="flex">
                <div className={history.length !== 0 ? "grow-1" : ""}>
                    <Sidebar />
                </div>
                <div className={`container center-block ${history.length === 0 ? "grow-1" : ""}`}>
                    <div className="flex space-between m5-top">
                        <h2 className = "h-l">History</h2>
                        <button className="btn btn-error" onClick = {() => deleteHistory(userDispatch)}>Delete History</button>
                    </div>
                    <div className="flex gap-m space-around m3-top self-start">
                        {renderVideoCards(reverseOfHistory)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default HistoryPage