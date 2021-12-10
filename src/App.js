import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar'
import AboutMe from './components/AboutMe'
import Portfolio from './components/Portfolio'
import MainBackground from './components/MainBackground';

function App() {
  return (
    <div>
   <MainBackground />
   <Navbar />
   <AboutMe />
   <Portfolio />
   </div>
  );
}

export default App;
