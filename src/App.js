import './App.css';
import LogIn from "./Components/Login";
import Waiters from "./Components/Waiters";
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
  <Routes>
  <Route path="/" element={<LogIn />} />
  <Route path="/waiters" element={<Waiters />} />
</Routes>);  
}

export default App;
