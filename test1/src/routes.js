import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Artwork from "./pages/Artwork";
import Climbing from "./pages/Climbing";
import Blog from "./pages/Blog";
import Worlds from "./pages/Worlds";
import ReactPrac from "./pages/ReactPrac";

export default function PageRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/artwork" element={<Artwork />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/climbing" element={<Climbing />} />
                <Route path="/react" element={<ReactPrac />} />
                <Route path="/worlds" element={<Worlds />} />
            </Routes>
        </Router>
    )
}
