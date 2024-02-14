
import './App.css';
import Footer from './components/Footer';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Banner from './components/Banner';
import Benefitss from './components/Benefitss';
import Kitchenlayouts from './components/Kitchenlayouts';

function App() {
  return (
    <div className="App">
       <About />
       <Services/>
       <Benefitss/>
       <Banner/>
       <Kitchenlayouts/>
       <Contact />
      <Footer />
    </div>
  );
}

export default App;
