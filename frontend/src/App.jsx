import Landing from "@/pages/Landing/Landing";
import '@/App.css';
import { Routes, Route } from "react-router-dom";
import RegisterPage from "@/pages/RegisterPage/RegisterPage";
import LoginPage from "@/pages/LoginPage/LoginPage";
import Dashboard from "@/pages/Dashboard/Dashboard";
import Catalog from "@/pages/Catalog/Catalog";

function App() {
  return (
      <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="catalog" element={<Catalog/>}/>
      </Routes>
  );
}

export default App;
