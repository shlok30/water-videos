import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import Nav from "./components/nav";
import Homepage from "./pages/homepage";
import Login from "./pages/login";
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
        <Route path = "/watch-later" element = {<WatchLaterPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
