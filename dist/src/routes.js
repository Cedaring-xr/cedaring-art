import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.js'
import Artwork from './pages/Artwork.js'
import Climbing from './pages/Climbing.js'
import Writing from './pages/Writing.js'
import Footer from './components/Footer.js'
import Header from './components/Header.js'

export default function PageRoutes() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/artwork" element={<Artwork />} />
                <Route path="/writing" element={<Writing />} />
                <Route path="/climbing" element={<Climbing />} />
            </Routes>
            <Footer />
        </Router>
    )
}
