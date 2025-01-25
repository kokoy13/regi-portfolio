import Navbar from "./components/Navbar"
import Header from "./components/Header"
import About from "./components/About"
import Showcase from "./components/Showcase"
import Services from "./components/Services"

function App() {

  return (
    <>
      <div className="m-5">
        <Navbar></Navbar>
        <Header></Header>
        <About></About>
        <Showcase></Showcase>
        <Services></Services>
      </div>
    </>
  )
}

export default App
