import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import SingleService from "./Pages/SingleService"

function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/what-we-do/:slug" element={<SingleService />} />
      </Routes>
    <Footer/>
    </>
  )
}

export default App
