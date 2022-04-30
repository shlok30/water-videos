import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import Nav from "./components/nav";
import Homepage from "./pages/homepage";


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path = "/" element = {<Homepage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
