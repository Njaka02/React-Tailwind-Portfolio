import { StrictMode } from "react";
import Home from "./pages/Home.jsx";
import ReactDOM from "react-dom/client";
// import { createRoot } from "react-dom/client";
import NotFound from "./pages/NotFound.jsx";
import Toaster from "./components/ui/toaster.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </StrictMode>
);
