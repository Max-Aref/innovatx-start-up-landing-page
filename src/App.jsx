import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./sections/Header";
import Footer from "./sections/Footer";
import Home from "./pages/Home";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import SmallBusinessMission from "./pages/SmallBusinessMission";
import StartupsMission from "./pages/StartupsMission";
import InhouseProjectsMission from "./pages/InhouseProjectsMission";
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
            <Route path='/blog' element={<Blog />} />
            <Route path='/blog/:id' element={<BlogDetails />} />
            <Route
              path='/mission/small-business'
              element={<SmallBusinessMission />}
            />
            <Route path='/mission/startups' element={<StartupsMission />} />
            <Route
              path='/mission/inhouse-projects'
              element={<InhouseProjectsMission />}
            />
          </Routes>
        </main>
        <Footer />
        <FloatingAiAssistant />
      </div>
    </Router>
  );
}

export default App;
