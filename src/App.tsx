import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <Router>
      <div className="w-full absolute">
        <div className="w-[22.3rem] h-[22.3rem] bg-[#2A3E84] rounded-full top-[-4rem] left-[-4rem] absolute blur-[10rem]"></div>
        <div className="w-[22.3rem] h-[22.3rem] bg-[#2A3E84] rounded-full top-[-4rem] left-[70rem] absolute blur-[10rem]"></div>
        <div className="w-[22.3rem] h-[22.3rem] bg-[#192065] rounded-full top-[14rem] left-[60rem] absolute blur-[10rem]"></div>
        {/* <img src="/icons/bg-layer-one.svg"/>
        <img src="/icons/bg-layer-two.svg" className="top-[-20rem] left-[40rem] absolute"/>
        <img src="/icons/bg-layer-two.svg" className="top-[-5rem] left-[30rem] absolute"/> */}
      </div>

      <Routes>
        <Route path="/" element={<Navigate to="/homepage" replace />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
