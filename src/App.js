import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages";
import MapView from "./components/MapView/MapView";

function App() {
  return (
     <Router>
       <Home />
     </Router>
   
  );
}

export default App;
