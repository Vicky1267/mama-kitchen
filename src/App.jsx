import React from 'react'
import Navbar from './Component/NavBar'
import Home from './Component/Home'
import OfferSection from './Component/OfferSection'
import Menu from './Component/Menu'
import CartPage from './Component/CartPage'
import About from './Component/About'
import Book from './Component/Book'
import Register from './Component/Register'
import LoginPage from './Component/LoginPage'
import Footer from './Component/Footer'
import './App.css'
import { Routes, Route } from "react-router-dom";

function App() {
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <>
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offersection" element={<OfferSection />} />
        <Route path="/menu" element={<Menu searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/book" element={<Book />} />
        <Route path="/register" element={<Register />} />
         <Route path="/login" element={<LoginPage />} />

        {/* Cart Page */}
        <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
    </>
  )
}

export default App
