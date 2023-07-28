// import logo from './logo.svg';
import './App.css';
import NavBar from './component/Navbar';
import Slider from './component/Slider';
import Home from './component/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Teaching from './component/Teaching';
import Signup from './component/Signup';
import Login from './component/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/navbar' element={<NavBar />} />
          <Route path='/slider' element = {<Slider />} />
          <Route path="/" element={<Home />} />
          <Route path='/teaching' element={<Teaching />} />
          <Route path='/signup' element = {<Signup />} />
          <Route path='/login' element = {<Login />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
