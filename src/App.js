import './App.css';
import Banner from './components/banner/Banner';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
       <h1>Swiper, Route</h1>
       {/* <Banner/>
       <Navbar/> */}
       <Footer/>
     
     <div className="container">
      <h1>NavbarLogo</h1>
      <ul className='main'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
     </div>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home/>}/>
          <Route path='/about' element={ <About/>}/>
          <Route path='/contact' element={  <Contact/>}/>
        </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
