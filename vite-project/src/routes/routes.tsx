import { Routes, Route } from "react-router-dom";
import Login from "@/components/Login";
import App from "@/App";
import { Navbar } from "@/components/Navbar";

export default function AppRoutes() {
  return (
    <Routes>
      {/* The Login route is now standalone */}
      <Route path="/" element={<Login />} />

      {/* The Dashboard and other app routes can be nested under a layout */}
      <Route element={<App />}>
        {/* Assuming App.tsx will contain the main layout and an <Outlet /> */}
        <Route path="/dashboard" element={<Navbar />} />
      </Route>
    </Routes>
  );
}
