import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
// import Navbar from "./Components/Navbar"
// import Footer from "./Components/Footer"
import SingleService from "./Pages/SingleService"
import ScrollToTop from "./Components/ScrollToTop"
import FloatingButtons from "./Components/FloatingButtons"
import About from "./Pages/About"
import PrivacyPolicy from "./Pages/PrivacyPolicy"
import CancellationRefundPolicy from "./Pages/CancellationRefundPolicy"
import ShippingDeliveryPolicy from "./Pages/ShippingDeliveryPolicy"
import TermsConditions from "./Pages/TermsConditions"
import About2 from "./Components/About2"
import Story from "./Components/Story"
import Vision from "./Pages/Vision"
import Working from "./Pages/Working"
import Supporters from "./Pages/Supporters"
import ContactPage from "./Pages/ContactPage"
import Team from "./Pages/Team"
import Gallery from "./Pages/Gallery"
import FoundationCertificates from "./Pages/FoundationCertificates"

function App() {

  return (
    <>
    <ScrollToTop/>
    {/* <Navbar/> */}
      <Routes>
        {/* <Route path="/" element={<Home/>}/>
        <Route path="/what-we-do/:slug" element={<SingleService />} />
        <Route path="/about" element={<About />}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
        <Route path="/cancellation-refund" element={<CancellationRefundPolicy/>}/>
        <Route path="/shipping-delivery" element={<ShippingDeliveryPolicy/>}/>
        <Route path="/terms-conditions" element={<TermsConditions/>}/>
        <Route path="/story" element={<Story/>}/>
        <Route path="/vision-mission" element={<Vision/>}/>
        <Route path="/working" element={<Working/>}/>
        <Route path="/supporters" element={<Supporters/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/certificates" element={<FoundationCertificates/>}/> */}
      </Routes>
    {/* <Footer/> */}
    <FloatingButtons/>
    </>
  )
}

export default App
