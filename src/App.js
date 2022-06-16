import './App.css';
import Log from "./Components/Log";
import Waiters from "./Components/Waiters";
import Orders from "./Components/Orders";
import { AuthProvider } from './Firebase/context';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Log />} />
        <Route path="/waiters" element={<Waiters />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </AuthProvider>
    );
}

export default App;
