import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import EcoFriendly from "./pages/EcoFriendly";
import NonEcoFriendy from "./pages/NonEcoFriendy";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/eco-friendly" element={<EcoFriendly />} />
          <Route path="/non-eco-friendly" element={<NonEcoFriendy />} />
        </Routes>
        {/* https://www.youtube.com/shorts/_IIpfnGgs4c?feature=share */}
      </div>
    </>
  );
}

export default App;
