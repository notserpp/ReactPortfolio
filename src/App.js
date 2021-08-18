import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar"
import AboutMe from './components/AboutMe';
import Background from './components/Background'

function App() {
  return (
    <div>
   <Background />
   <Navbar />
   <AboutMe />
   </div>
  );
}

export default App;
