// import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home/Index";
import AboutMe from "./pages/aboutMe/Index"
import Skils from "./pages/skils/Index";
import Projects from "./pages/projects/Index";
import Contacts from "./pages/contacts/Index";
import NoteFound from './components/NoteFound';



function App() {  
  return (
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/aboutme' element={<AboutMe/>} />
              <Route path='/skils' element={<Skils/>} />
              <Route path='/projects' element={<Projects/>} />
              <Route path='/contacts' element={<Contacts/>} />
              <Route path='*' element={<NoteFound/>} />
          </Routes>
        </BrowserRouter>
  );
}

export default App;
