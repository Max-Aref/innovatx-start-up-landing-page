import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./sections/Header";
import Footer from "./sections/Footer";
import Home from "./pages/Home";
import Careers from "./pages/Careers";
import FloatingAiAssistant from "./components/FloatingAiAssistant";

function App() {
  return (
    <Router>
      <div className='min-h-screen bg-s1'>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/careers' element={<Careers />} />
          </Routes>
        </main>
        <Footer />
        <FloatingAiAssistant />
      </div>
    </Router>
  );
}

export default App;
