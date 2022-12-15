// import './App.css';
import {BrowserRouter} from "react-router-dom";
import Home from "./pages/home/Index";
import AboutMe from "./pages/aboutMe/Index"
import Skils from "./pages/skils/Index";
import Projects from "./pages/projects/Index";
import Contacts from "./pages/contacts/Index";
import NoteFound from './components/NoteFound';
import AnimatedRoutes from "./components/AnimatedRoutes";



function App() { 

  return (
        <BrowserRouter>
            <AnimatedRoutes/>
        </BrowserRouter>
  );
}

export default App;
