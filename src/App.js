import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import Nav from "./components/nav";
import Homepage from "./pages/homepage";
import Trending from "./pages/trending";


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path = "/" element = {<Homepage />} />
        <Route path = "/trending" element = {<Trending />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
