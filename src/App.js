import './App.css';
import LogIn from "./Components/Login";
import Waiters from "./Components/Waiters";
import Orders from "./Components/Orders";
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
  <Routes>
  <Route path="/" element={<LogIn />} />
  <Route path="/waiters" element={<Waiters />}/>
  <Route path="/orders" element={<Orders />} />
</Routes>);  
}

export default App;
