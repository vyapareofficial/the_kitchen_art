
import './App.css';
import Footer from './components/Footer';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Steps from './components/Steps';
import Testimonials from './components/Testimonials';
function App() {
  return (
    <div className="App">
      <Services/>
      <About />
      <Steps />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
