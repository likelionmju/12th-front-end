import Profile from "./components/Profile";
import Visit from "./components/Visit";
import Header from "./components/Header";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="/visit" element={<Visit />} />
      <Route path="/header" element={<Header />} />
    </Routes>
  );
}

export default App;
