import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import ServicesSection from "./components/ServicesSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Highlight from "./components/Highlight";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './assets/css/style.css';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <MainSection />
            <ServicesSection />
            <Skills />
            <Projects />
            <Testimonials />
            <Highlight />
          </>
        } />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
