
import './App.css'
import { Homepage } from './component/Homepage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PricingPage2 from './component/PricingPage2';
import Header from './component/Header';
import Footer from './component/Footer';
import GmailContactForm from './component/ContactForm';
import ContactForm from './component/ContactForm';
import Shopping from './component/Shopping';
import Form2 from './component/Form2';

function App() {

  return (
    <>

   <Router>
   <Header/>
      <Routes>
        {/* Homepage Route */}
        <Route path="/" element={<Homepage />} />
        {/* Pricing Page Route */}
        <Route exact  path="/pricing" element={<PricingPage2 />} />
        <Route path="/form" element={<ContactForm/>} />
        <Route exact path='/shopping' element={<Shopping/>} />
        <Route path="/subform" element={<Form2/>} />

      </Routes>
      <Footer/>

    </Router>
    </>
  )
}

export default App
