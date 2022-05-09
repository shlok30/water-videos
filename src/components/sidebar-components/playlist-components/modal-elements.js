import { usePlaylist } from "../../../context/playlist-context"

const ModalElements = ({title,_id}) => {
    console.log("Didnt load the first time why?")
    const {selectedPlaylist,setSelectedPlaylist} = usePlaylist()
    const playlistInformation = selectedPlaylist.find((playlist) => playlist.id === _id)
    console.log("This is playlist information",playlistInformation)
    const handleChange = () => {
        setSelectedPlaylist(selectedPlaylist.map((playlist) => playlist.id === _id ? {...playlist,selected : !playlist.selected} : {...playlist}))
    }
    return(
        <div className="flex self-start gap-s" >
            <input type = "checkbox" checked = {playlistInformation.selected === true} onChange = {handleChange}/>{title}
        </div>
    )
}

export default ModalElements