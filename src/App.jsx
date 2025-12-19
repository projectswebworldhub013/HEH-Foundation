import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import SingleService from "./Pages/SingleService"
import ScrollToTop from "./Components/ScrollToTop"
import FloatingButtons from "./Components/FloatingButtons"
import About from "./Pages/About"
import PrivacyPolicy from "./Pages/PrivacyPolicy"
import CancellationRefundPolicy from "./Pages/CancellationRefundPolicy"
import ShippingDeliveryPolicy from "./Pages/ShippingDeliveryPolicy"
import TermsConditions from "./Pages/TermsConditions"

function App() {

  return (
    <>
    <ScrollToTop/>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/what-we-do/:slug" element={<SingleService />} />
        <Route path="/about" element={<About />}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
        <Route path="/cancellation-refund" element={<CancellationRefundPolicy/>}/>
        <Route path="/shipping-delivery" element={<ShippingDeliveryPolicy/>}/>
        <Route path="/terms-conditions" element={<TermsConditions/>}/>
      </Routes>
    <Footer/>
    <FloatingButtons/>
    </>
  )
}

export default App
