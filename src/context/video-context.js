import {createContext , useContext, useEffect, useState} from 'react'

const VideoContext = createContext()

const VideoContextProvider = ({children}) => {

    const [videoLibrary , setVideoLibrary] = useState([])

    useEffect(() => {
        fetch("/api/videos")
         .then(res => res.json())
         .then(res => setVideoLibrary([...res.videos]))
    },[])

    return(
        <VideoContext.Provider value = {{videoLibrary}}>
            {children}
        </VideoContext.Provider>
    )
}

const useVideos = () => useContext(VideoContext)

export {VideoContextProvider,useVideos}