import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar"
import AboutMe from './components/AboutMe';
import MainPage from "./components/AboutMe"

function App() {
  return (
    <div>
   <Navbar />
   <MainPage />
   <AboutMe />
   </div>
  );
}

export default App;
