import './App.css';
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";

function App()  {
  
  return (
  
    <div className="container" >
      <Header />
      <Hero />
      <Main />
      <Contact />
      <About />
  </div>

  )
}

export default App;
