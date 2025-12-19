import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import SingleService from "./Pages/SingleService"
import ScrollToTop from "./Components/ScrollToTop"
import FloatingButtons from "./Components/FloatingButtons"

function App() {

  return (
    <>
    <ScrollToTop/>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/what-we-do/:slug" element={<SingleService />} />
      </Routes>
    <Footer/>
    <FloatingButtons/>
    </>
  )
}

export default App
