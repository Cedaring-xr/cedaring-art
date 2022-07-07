import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import Artwork from "./pages/Artwork";
import Climbing from "./pages/Climbing";
import Blog from "./pages/Blog";
import Worlds from "./pages/Worlds";


export default function Routing() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/artwork" element={<Artwork />} />
                <Route path="/climbing" element={<Climbing />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/worlds" element={<Worlds />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </Router>
    )
}
