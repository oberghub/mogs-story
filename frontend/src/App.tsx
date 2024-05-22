import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import CreateStoryPage from "./pages/CreateStoryPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ViewStoryPage from "./pages/ViewStoryPage";
import ProtectRoutes from "./components/ProtectRoutes";

function App() {
  return (
    <div className="w-full">
      <BrowserRouter>
        <Navbar />
        <div className="w-full h-screen flex justify-center items-center">
          <Routes>
            <Route path="/" element={<ProtectRoutes children={<HomePage />} />} />
            <Route path="/story/create" element={<ProtectRoutes children={<CreateStoryPage />} />} />
            <Route path="/story/view" element={<ProtectRoutes children={<ViewStoryPage />} />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
