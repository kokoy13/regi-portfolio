import Navbar from "./components/Navbar"
import Header from "./components/Header"
import About from "./components/About"
import Showcase from "./components/Showcase"
import Services from "./components/Services"
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <div className="m-5">
        <Navbar></Navbar>
        <Header></Header>
        <About></About>
        <Showcase></Showcase>
        <Services></Services>
        <Contact></Contact>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
