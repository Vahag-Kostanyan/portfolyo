// import './App.css';
import {BrowserRouter} from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import NavLink from "./components/NavLink";



function App() { 

  return (
        <BrowserRouter>
            <AnimatedRoutes/>
        </BrowserRouter>
  );
}

export default App;
