import './App.css';
import LogIn from "./Components/Login";
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
  <Routes>
  <Route path="/" element={<LogIn />} />
</Routes>);  
}

export default App;
