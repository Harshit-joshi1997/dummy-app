import { Routes, Route } from "react-router-dom";
import Login from "@/components/Login";
import App from "@/App"; // make sure App is imported
import { Navbar } from "@/components/Navbar";


export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Navbar/>} />
        
      </Route>
    </Routes>
  );
}
