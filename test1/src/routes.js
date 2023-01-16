import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Artwork from './pages/Artwork'
import Climbing from './pages/Climbing'
import Writing from './pages/Writing'
import Footer from './components/Footer'
import Header from './components/Header'

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
