import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./sections/Header";
import Footer from "./sections/Footer";
import FloatingAiAssistant from "./components/FloatingAiAssistant";

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home"));
const Careers = lazy(() => import("./pages/Careers"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogDetails = lazy(() => import("./pages/BlogDetails"));
const SmallBusinessMission = lazy(() => import("./pages/SmallBusinessMission"));
const StartupsMission = lazy(() => import("./pages/StartupsMission"));
const InhouseProjectsMission = lazy(() =>
  import("./pages/InhouseProjectsMission")
);
const BookConsultation = lazy(() => import("./pages/BookConsultation"));
const Sitemap = lazy(() => import("./pages/Sitemap"));
const TermsOfUse = lazy(() => import("./pages/TermsOfUse"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const About = lazy(() => import("./pages/About"));

// Loading fallback component
const PageLoader = () => (
  <div className='min-h-screen flex items-center justify-center'>
    <div className='text-center'>
      <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-p1 mx-auto mb-4'></div>
      <p className='text-p4 body-1'>Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className='min-h-screen bg-s1'>
        <Header />
        <main>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/careers' element={<Careers />} />
              <Route path='/blog' element={<Blog />} />
              <Route path='/blog/:id' element={<BlogDetails />} />
              <Route path='/book-consultation' element={<BookConsultation />} />
              <Route path='/sitemap' element={<Sitemap />} />
              <Route path='/terms-of-use' element={<TermsOfUse />} />
              <Route path='/privacy-policy' element={<PrivacyPolicy />} />
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
          </Suspense>
        </main>
        <Footer />
        <FloatingAiAssistant />
      </div>
    </Router>
  );
}

export default App;
