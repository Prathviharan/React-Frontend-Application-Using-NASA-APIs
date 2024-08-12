import {BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Rover from "./pages/Rover";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Astro_img from "./pages/Astro_img";
import axios from 'axios';
import {Toaster} from 'react-hot-toast';


axios.defaults.baseURL = 'http://localhost/3000/'
axios.defaults.withCredentials=true

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Toaster position="bottom-right" toastOptions={{duration: 2000}} />
        <Routes>
          <Route path="/rover" element={<Rover />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/astro_img" element={<Astro_img/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
