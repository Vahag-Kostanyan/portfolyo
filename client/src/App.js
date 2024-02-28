import './css/App.css';
import { useMediaQuery } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import {BrowserRouter} from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import NavLink from "./components/NavLink";



function App() { 
  const t = useTranslation();

  return (
        <BrowserRouter>
            <AnimatedRoutes/>
        </BrowserRouter>
  );
}

export default App;
