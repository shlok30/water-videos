import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import Nav from "./components/nav";
import RequiresAuth from "./functions/requiresAuth";
import HistoryPage from "./pages/history";
import Homepage from "./pages/homepage";
import LikedVideos from "./pages/liked";
import Login from "./pages/login";
import PlaylistPage from "./pages/playlist";
import PlaylistListing from "./pages/playlist-listing";
import Signup from "./pages/signup";
import Trending from "./pages/trending";
import VideoPage from "./pages/video";
import WatchLaterPage from "./pages/watch-later";


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path = "/" element = {<Homepage />} />
        <Route path = "/trending" element = {<Trending />} />
        <Route path = "/video/:videoId" element = {<VideoPage />} />
        <Route path = "/login" element = {<Login />} />
        <Route path = "/signup" element = {<Signup />} />
        <Route path = "/watch-later" element = {<RequiresAuth><WatchLaterPage /></RequiresAuth>} />
        <Route path = "/liked-videos" element = {<RequiresAuth><LikedVideos /></RequiresAuth>} />
        <Route path = "/playlists" element ={<RequiresAuth><PlaylistListing /></RequiresAuth>} />
        <Route path = "/playlists/:videoId" element ={<RequiresAuth><PlaylistListing /></RequiresAuth>} />
        <Route path = "/playlist/:playlistId" element = {<RequiresAuth><PlaylistPage /></RequiresAuth>} />
        <Route path = "/history" element = {<RequiresAuth><HistoryPage /></RequiresAuth>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
