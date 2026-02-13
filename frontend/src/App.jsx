import Landing from "@/pages/Landing/Landing";
import '@/App.css';
import { Routes, Route } from "react-router-dom";
import LoginPage from "@/pages/LoginPage/LoginPage";
import RegisterPage from "@/pages/RegisterPage/RegisterPage";
import ProtectedTest from "@/pages/ProtectedTest/ProtectedTest";

function App() {
  return (
      <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/potected" element={<ProtectedTest/>}/>
      </Routes>
  );
}

export default App;
