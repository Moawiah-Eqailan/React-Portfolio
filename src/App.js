import React from "react";
import { HashRouter as Router, Route, Routes, useLocation } from "react-router-dom";
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
import useDarkMode from './hooks/useDarkMode';

function App() {
  const location = useLocation();
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  // التحكم بعرض الـ Sidebar (الهيدر)
  const showSidebar = location.pathname !== '/contact' && location.pathname !== '/TermsAndConditions';

  return (
    <div className={isDarkMode ? 'dark-mode' : ''}>
      {/* Sidebar أو الهيدر */}
      {showSidebar && <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />}

      <main>
        <Routes>
          {/* الصفحة الرئيسية تعرض جميع الأقسام */}
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
          
          {/* صفحة Contact منفصلة */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* الفوتر ثابت */}
      <Footer />
    </div>
  );
}

export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
