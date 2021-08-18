import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar"
import AboutMe from './components/AboutMe';
import MainPage from "./components/MainPage"

function App() {
  return (
    <div>
   <Navbar />
   <AboutMe />
   </div>
  );
}

export default App;
