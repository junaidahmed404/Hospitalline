import HomeSection from "./components/HomeSection";
import LoadingPage from "./components/LoadingPage";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import DemoSection from "./components/DemoVersion";
import ContactSection from "./components/ContactUs";
import FullVersion from "./components/FullVersion";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div>
      <LoadingPage />
      <Navbar />
      <HomeSection />
      <AboutSection />
      <DemoSection />
      <FullVersion />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
