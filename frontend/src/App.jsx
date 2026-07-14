import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard.jsx";
import Watchlist from "./pages/Watchlist.jsx";
import Applications from "./pages/Applications.jsx";
import Preparation from "./pages/Preparation.jsx";
import Notifications from "./pages/Notifications.jsx";
import Profile from "./pages/Profile.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/watchlist" element={<Watchlist />} />
      <Route path="/applications" element={<Applications />} />
      <Route path="/preparation" element={<Preparation />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;