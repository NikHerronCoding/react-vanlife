import { useState } from 'react'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom' 
import './App.css'
import Banner from './components/Banner'
import About from './components/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Vans from './components/Vans'
import VanDetail from './components/VanDetail'

function App() {
  

  return (

    <>
      <BrowserRouter>
        <Navbar logoText={<Link to="/">#VANLIFE</Link>}>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>

        </Navbar>

        <main className="main">

            <Routes>
              <Route path="/" element={
                <Banner
                link={<Link to="/vans">Find Your Van</Link>}
                /> 
              }/>
              <Route />
              <Route path="/about" element={<About link={<Link to="/vans">Explore Our Vans</Link>}/>}/><Route />
              <Route path="/vans" element={<Vans/>}/><Route />
              <Route path="/vans/:id" element={<VanDetail/>}/><Route />
            </Routes>

        

        </main>

      <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
