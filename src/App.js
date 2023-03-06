import "./App.scss";
import './App.css';
import { Navbar } from './components/Navbar';
import Header from './components/Header';
import Cards from './components/Cards';
import AboutUs from './components/AboutUs';
import Features from './components/Features';
import OurSkills from './components/OurSkills';
import Team from './components/Team';
import ImageCon from './components/ImageCon';
import Partner from './components/Partner';
import Subscribe from './components/Subscribe';
import Contacts from './components/Contacts';
import Maps from './components/Maps';
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Cards/>
      <AboutUs/>
      <Features/>
      <OurSkills/>
      <Team/>
      <ImageCon/>
      <Partner/>
      <Subscribe/>
      <Contacts/> 
      <Maps/>
      <Footer/>
    </div>
  );
}

export default App;
