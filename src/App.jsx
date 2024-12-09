// import logo from './logo.svg';
// import './App.css';
// import button from './Button.jsx';
// import ButtonUsage from './Button.jsx';
// import HelpHero from './components/NewHeader/Header.jsx';
// import Navbar from './components/Navbar/Navbar.jsx'
// import "./.././src/components/Imagelist/Imagelist.css"
// import "./.././src/components/Organisations/Organizations.css"
// import Organizations from './components/Organisations/Organizations.jsx';
// import Card from './components/Card/Card.jsx';
// import Comments from './components/Comments/Comments.jsx';
// import { Accordion } from '@mui/material';
// import AccordionUsage from './components/Accordian/Accordian.jsx';
// function App() {
//   return (
//     <div className="App">
//      <Navbar/>
//      <Hero/>
//      <Organizations/>
//      <Comments/>
//      <h2 className='mt-6' id="faq">Frequently asked questions</h2>
//      <AccordionUsage/>

//     </div>
//   );
// }

// export default App;
import React from "react";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import BlogsPage from "./pages/Blogs"; // Import the Blogs page
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/blogs" element={<BlogsPage />} /> {/* New route */}
      </Routes>
    </div>
  );
};

export default App;

