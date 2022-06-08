import './App.css';
import LogIn from "./Components/Login";
import Waiters from "./Components/Waiters";
import OrderView from "./Components/OrderView";
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
  <Routes>
  <Route path="/" element={<LogIn />} />
  <Route path="/waiters" element={<Waiters />}/>
  <Route path="/order" element={<OrderView />} />
</Routes>);  
}

export default App;
